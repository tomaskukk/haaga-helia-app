import React, { Component } from "react";
import Navigation from "./components/Nav";
import amicaService from "./services/Amica";
import lukkariService from "./services/Lukkari";
import Calender from "./components/Calender";
import Otherlinks from "./components/Otherlinks";
import Header from "./components/Header";
import Lukkari from "./components/Lukkari";
import "./components/css/components.css";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "./components/Footer";
import strings from "./components/Langstrings";
import Kideapp from "./components/KideApp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      courseName: "",
      courseUrl: "",
      selectedDay: 0,
      calenderLink: "",
      pasilaAmicaFood: [],
      malmiAmicaFood: [],
      haagaAmicaFood: [],
      location: "Pasila",
      lukkari: "<div></div>",
      groupId: "",
      waitMessage: "",
      lang: "fi",
      week: new Date(),
      lukkariCookie: ""
    };
  }

  // calls when first render is ready
  componentDidMount() {
    const userTimetableStringId = this.getUserTimetableCookieOrReturnDefaultString();
    this.setGroupIdState(userTimetableStringId);
    this.findLukkariByGroupId(userTimetableStringId);
    this.findLunchMenus(this.state.lang);
    this.highLightCurrentDayInTimetable();
  }

  setGroupIdState = timetableId => {
    this.setState({ groupId: timetableId });
  };

  getUserTimetableCookieOrReturnDefaultString = () => {
    return window.localStorage.getItem("lukkariTunnus") || "Tn2pd";
  };

  setLunchLocationIfUserAlreadyHasCookieSet = () => {
    const locationCookie = window.localStorage.getItem("location");
    if (locationCookie) {
      this.setState({ location: locationCookie });
    }
  };

  // give styling to current day button on lunch and parties
  // again dangerous so if statement needed
  // should probably find better way to do this
  highLightCurrentDayInTimetable = () => {
    const thisDayButton = document.getElementById(new Date().getDay());
    if (thisDayButton) {
      thisDayButton.classList.add("btn-success");
    }
  };

  handleLocationClick = (event, value) => {
    this.setState({ location: value }, () =>
      window.localStorage.setItem("location", this.state.location)
    );
  };

  handleLangClick = (event, value) => {
    strings.setLanguage(this.state.lang === "fi" ? "en" : "fi");
    this.findLunchMenus(this.state.lang === "fi" ? "en" : "fi");
    this.setState({ lang: this.state.lang === "fi" ? "en" : "fi" });
  };

  handleDayClick = day => {
    const thisDayInWeek = new Date().getDay();
    this.setState({ selectedDay: day - thisDayInWeek });
  };

  handleLoginFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  setNewValueForTimeTableCookie = () => {
    window.localStorage.removeItem("lukkariTunus");
    window.localStorage.setItem("lukkariTunnus", this.state.groupId);
  };

  setWaitMessageWhenSearchingForTimeTable = () => {
    this.setState({
      waitMessage: "Finding group " + this.state.groupId + ".."
    });
  };

  setStatesAfterResponseFromLukkariService = response => {
    this.setState({
      lukkari: response,
      groupId: "",
      lukkariCookie: response.split("\n")[0],
      waitMessage:
        strings.timetablefor + " " + this.state.groupId + " " + strings.lukkari
    });
  };

  findLukkariByGroupId = id => {
    lukkariService
      .findByGroupId(id)
      .then(response => {
        this.setStatesAfterResponseFromLukkariService(response);
      })
      .then(() => {
        this.highLightThisDayLukkari();
      });
  };

  handleLukkariChange = (event, id) => {
    event.preventDefault();
    this.setNewValueForTimeTableCookie();
    this.setWaitMessageWhenSearchingForTimeTable();
    this.findLukkariByGroupId(id);
  };

  changeWeekLukkari = () => {
    lukkariService
      .changeWeekLukkari(
        this.state.week
          .toJSON()
          .substr(0, 10)
          .toString(),
        this.state.lukkariCookie
      )
      .then(response => {
        this.setState({ lukkari: response });
      });
  };

  handleWeekChangeForTimeTable = week => {
    const changedWeek = this.state.week;
    week === "next"
      ? changedWeek.setDate(this.state.week.getDate() + 7)
      : changedWeek.setDate(this.state.week.getDate() - 7);
    this.setState({ week: changedWeek }, () => this.changeWeekLukkari());
  };

  highLightThisDayLukkari = () => {
    const thisDayInWeek = new Date().getDay();
    const thisDayInLukkari = document.getElementById(`wd${thisDayInWeek}`);
    if (thisDayInLukkari) {
      const parentOfThisDayInLukkari = thisDayInLukkari.parentNode;
      parentOfThisDayInLukkari.style.backgroundColor = "#b7d8e5";
    }
  };

  findLunchMenus = lang => {
    amicaService.getAllHaaga(lang).then(lunchMenus => {
      this.setState({ haagaAmicaFood: lunchMenus.menus });
    });
    amicaService.getAllMalmi(lang).then(lunchMenus => {
      this.setState({ malmiAmicaFood: lunchMenus.menus });
    });
    amicaService.getAllPasila(lang).then(lunchMenus => {
      console.log(lunchMenus)
      this.setState({ pasilaAmicaFood: lunchMenus.menus });
    });
  };

  render() {
    return (
      <div className="rootDom">
        <Header
          selectedLang={this.state.lang}
          handleLangClick={this.handleLangClick.bind(this)}
        />
        <Container className="container">
          <div id="mobileNav">
            <Navigation />
          </div>
          <Col className="rightContainer">
            <Lukkari
              handleLukkariChange={this.handleLukkariChange.bind(this)}
              lukkariState={this.state.lukkari}
              groupId={this.state.groupId}
              handler={this.handleLoginFieldChange.bind(this)}
              waitMessage={this.state.waitMessage}
              handleWeekChange={this.handleWeekChangeForTimeTable.bind(this)}
            />

            <Otherlinks />
          </Col>
          <Row>
            <Col className="leftContainer">
              <Calender
                selectedDay={this.state.selectedDay}
                foodListPasila={this.state.pasilaAmicaFood}
                foodListMalmi={this.state.malmiAmicaFood}
                foodListHaaga={this.state.haagaAmicaFood}
                selectedLocation={this.state.location}
                handleLocationClick={this.handleLocationClick.bind(this)}
                handleDayClick={this.handleDayClick.bind(this)}
              />
              <Kideapp selectedDay={this.state.selectedDay} />
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
