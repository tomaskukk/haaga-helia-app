import React, { Component } from 'react';
import Navigation from './components/Nav'
import amicaService from './services/Amica'
// import courseService from './services/Courses'
import lukkariService from './services/Lukkari'
import Calender from './components/Calender'
// import loginService from './services/Login'
// import createAccountService from './services/CreateAccount'
import Otherlinks from './components/Otherlinks'
import Header from './components/Header'
import Lukkari from './components/Lukkari'
import './components/css/components.css'
import { Row, Col, Container } from 'react-bootstrap'
import Footer from './components/Footer'
import strings from './components/Langstrings'
import Kideapp from './components/KideApp'
import startingLukkari from './services/StartingLukkari'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      /* username: '',
      password: '',
      creatingAccountPassword: '',
      passwordConfirmation: '',
      user: null,
      newName: '',
      newUrl: '', */
      error: null,
      courseName: '',
      courseUrl: '',
      selectedDay: 0,
      calenderLink: '',
      pasilaAmicaFood: [],
      malmiAmicaFood: [],
      haagaAmicaFood: [],
      location: 'Pasila',
      lukkari: '<div></div>',
      groupId: '',
      waitMessage: '',
      lang: 'fi',
      week: new Date(),
      lukkariCookie: ''
    }
  }

  // calls when first render is ready
  componentDidMount() {
    /* const loggedUser = window.localStorage.getItem('loggedUser')
    const user = JSON.parse(loggedUser)
    // log user in if has already localstorage already set
    if (loggedUser) { 
      this.setState({ user })
      courseService.setToken(user.token) 

      // get courses for the logged user
      userService.findById(user.id)
        .then(res => {
          console.log(res[0])
          this.setState({ lukkari: res[0].html })
        })
    }  */

      const locationCookie = window.localStorage.getItem('location')
      if (locationCookie) {
        this.setState({ location: locationCookie })
      }
    
      let id = 'tn2'
      const userLukkari = window.localStorage.getItem('lukkariTunnus')
      if (userLukkari) {
        id = userLukkari
        this.setState({ waitMessage: `${strings.timetablefor} ${id} ${strings.lukkari}` })
      }
      lukkariService.findByGroupId(id)
      .then(response => {
        this.setState({ 
          lukkari: response, 
          lukkariCookie: response.split('\n')[0],
        },
        () =>  {
          this.highLightThisDayLukkari()

          this.setMoodleCourseTarget()
        })
      })
    

      amicaService.getAllHaaga(this.state.lang)
        .then(lunchMenus => {
        this.setState({ haagaAmicaFood: lunchMenus.LunchMenus })
      })
      amicaService.getAllMalmi(this.state.lang)
        .then(lunchMenus => {
        this.setState({ malmiAmicaFood: lunchMenus.LunchMenus })
      })
      amicaService.getAllPasila(this.state.lang)
      .then(lunchMenus => {
        this.setState({ pasilaAmicaFood: lunchMenus.LunchMenus })
      })


      
      // give styling to current day button on lunch and parties 
      // again dangerous so if statement needed 
      // should probably find better way to do this 
      const thisDayButton = document.getElementById(new Date().getDay())
      if (thisDayButton) {
        thisDayButton.classList.add('btn-success')
      }
  }




  findLunchMenus = (lang) => {
    amicaService.getAllHaaga(lang)
        .then(lunchMenus => {
        this.setState({ haagaAmicaFood: lunchMenus.LunchMenus })
      })
      amicaService.getAllMalmi(lang)
        .then(lunchMenus => {
        this.setState({ malmiAmicaFood: lunchMenus.LunchMenus })
      })
      amicaService.getAllPasila(lang)
      .then(lunchMenus => {
        this.setState({ pasilaAmicaFood: lunchMenus.LunchMenus })
      })
  }
  // modal show false ! true 
  /* handleShow = () => {
    this.setState({ show: !this.state.show})
  } */

  /* handleAddEvent = () => {

    const getHeight = () => {
      const dateFrom = new Date()
      const dateTo = new Date()
      const splittedFrom = this.state.from.split(':')
      const splittedTo = this.state.to.split(':')
      dateFrom.setHours(parseInt(splittedFrom[0]), parseInt(splittedFrom[1]))
      dateTo.setHours(parseInt(splittedTo[0]), parseInt(splittedTo[1]))
      let twoFirstMillisFrom = parseInt((dateTo - dateFrom)).toString().substr(0, 3)
      if (twoFirstMillisFrom.substr(2, 3) === '0') {
        console.log("jep")
        twoFirstMillisFrom = twoFirstMillisFrom.substr(0, 2)
      }
      console.log(twoFirstMillisFrom)
      return ((twoFirstMillisFrom * 1.404).toFixed(0))
    }

      const getTop = () => {
        const splittedFrom = this.state.from.split(':')
        const from = parseInt(splittedFrom[0])
        let halfMore = splittedFrom[1] === '00' ? 0 : 0.5
        let fromToStart = from - 8
        return ((fromToStart + halfMore) * 50)
      }
    

    const eventHtml = `<div class="cl-event normal" 
    style="background:rgb(244, 238, 66);cursor:pointer;top:${getTop()}px;width:100%;left:0%;height:${getHeight()}px;overflow:hidden;z-index:1" 
    id="event21331" onclick="confirm('Delete event ' + event.target.textContent + '?') ? style='display:none;' : console.log">
    <dl class="cl-event-dl">
  <a href="#" title="Piilota varaus" onclick="event.stopPropagation(); 
  updateBasket('hide','21331','action','false','2019-03-05');" 
  class="small" style="float: right; margin-top: 0em; margin-right: 
  0.1em; padding: 0em; padding-bottom: .1em; padding-left:.3em; 
  padding-right:.3em; height:12px; font-weight: bold; border: 1px solid #000"  
  id="hbv">-</a><img title="Näytä tämän toteutuksen kaikki tulevat varaukset" 
  onclick="loadPopup(event,'toteutuksenVarausLista.php?code=PRO1TN001-3004&','Varaukset');" 
  src="images/list.gif" alt="" style="float:right;"/><dt>${this.state.from} - ${this.state.to}</dt>       
  <dd style="margin:0;padding:.1em 0 .1em .1em;">
  <b>${this.state.eventName}</b></dd>
    </dl>
  </div>`

  console.log(eventHtml)

    const divToAdd = document.createElement('div')

    divToAdd.innerHTML = eventHtml
    
    document.getElementById(this.state.id).appendChild(divToAdd)


    this.setState({ from: '', to: '', eventName: ''})
    this.handleShow()

    const newObject = {
      html: document.getElementById('lukkariToSave').innerHTML.toString(),
      user: this.state.user
    }

    courseService.create(newObject)
      

  } */
  
  
  handleLocationClick = (event, value) => {
    this.setState({ location: value },
      () => window.localStorage.setItem('location', this.state.location)
    )
  }

  handleLangClick = (event, value) => {
    strings.setLanguage(this.state.lang === 'fi' ? 'en' : 'fi')
    this.findLunchMenus(this.state.lang === 'fi' ? 'en' : 'fi')
    this.setState({ lang: this.state.lang === 'fi' ? 'en' : 'fi' })
  }

   
  handleDayClick = (day) => {
    // calculating the clicked day from getday
    // and params day based on clicked button

    const thisDayInWeek = new Date().getDay()
    this.setState({ selectedDay: day - thisDayInWeek })
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

 


  findLukkariByGroupId = (event, id) => {
    event.preventDefault()
    // save last searched group id for browser and render it
    window.localStorage.removeItem('lukkariTunus')
    window.localStorage.setItem('lukkariTunnus', this.state.groupId)
    this.setState({ waitMessage: 'Finding group ' + this.state.groupId + '..'})
    lukkariService.findByGroupId(id)
      .then(response => {
        this.setState({ lukkari: response, 
          groupId: '',
          lukkariCookie: response.split('\n')[0],
          waitMessage: strings.timetablefor + ' ' + this.state.groupId + ' ' + strings.lukkari},
        () =>  {
          // callback for setstate to add styles to timetable 
          // might be dangerous so if statements needed
          this.highLightThisDayLukkari()

          this.setMoodleCourseTarget()
        })
      })
  }

  changeWeekLukkari = (week) => {


    const changedWeek = this.state.week

    week === 'next' ? changedWeek.setDate(this.state.week.getDate() + 7)
    : 

    changedWeek.setDate(this.state.week.getDate() - 7)



    this.setState({ week: changedWeek },
    () => {
      

      lukkariService.changeWeekLukkari(this.state.week.toJSON().substr(0, 10).toString(), this.state.lukkariCookie)
      .then(response => {
        this.setState({ lukkari: response },
        () => {          

          this.setMoodleCourseTarget()
        })
      })
    }
    )
  }

  highLightThisDayLukkari = () => {
    const thisDayInWeek = new Date().getDay()
    if (document.getElementById(`wd${thisDayInWeek}`)) {
      const thisDayInLukkari = document.getElementById(`wd${thisDayInWeek}`).parentNode
      thisDayInLukkari.style.backgroundColor = '#b7d8e5'
    }
  }

 



  setMoodleCourseTarget = () => {
    let pTags = document.getElementsByTagName('p')
        for (let i = 0; i < pTags.length; i++) {
          let aElem = document.createElement('a')
          let code = pTags[i].firstChild.textContent
          aElem.href = `https://hhmoodle.haaga-helia.fi/course/view.php?name=${code}`
          let textNode = document.createTextNode('Moodle for this course')
          aElem.appendChild(textNode)
          let parent = (pTags[i].parentNode.parentNode.parentNode)
          parent.addEventListener('click', 
          () => window.open(`https://hhmoodle.haaga-helia.fi/course/view.php?name=${code}`, '_blank'))
          }
  }
 
  /* createAccount = (event) => {
    event.preventDefault()
    if (this.state.creatingAccountPassword !== this.state.passwordConfirmation
       || this.state.creatingAccountPassword === '') {
      this.setState({ 
        error: 'Passwords does not match or field is empty',
        creatingAccountPassword: '',
        passwordConfirmation: ''
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 3000)
      return
    }
    this.setState({error : 'Creating account...'})
    const userObject = {
      username: this.state.username,
      password: this.state.creatingAccountPassword,
      name: this.state.username
    }    
    this.setState({
      creatingAccountPassword: '',
      passwordConfirmation: ''
    })
    const errUserMustBeUnique = `Username must be unique`
    createAccountService.create(userObject)
    .then(resp => {
      resp === undefined ?
      this.setState({error: errUserMustBeUnique})
      :
      this.setState({error: `User ${resp.name} created succesfully!`})
      setTimeout(() => {
        this.state.error === errUserMustBeUnique ? 
        this.setState({error: null})
        : console.log("Jebajee")
      }, 3000)
    })
  }

  logout = (event) => {
    event.preventDefault()
    this.setState({
      user: null,
      courses: []
    })
    window.localStorage.removeItem('loggedUser')
  }

  login = async (event) => {
    event.preventDefault()

  try {
    const user = await loginService.login({
      username: this.state.username,
      password: this.state.password
    })

    window.localStorage.setItem('loggedUser', JSON.stringify(user))
    courseService.setToken(user.token)
    this.setState({ username: '', password: '', user })
    this.componentDidMount()
  } catch(exception) {
    console.log(exception)
    this.setState({
      error: 'Username or password incorrect'
    })
    setTimeout(() => {
      this.setState({ error: null })
    }, 3000)
  }
} */


  render() {
    
    /* if (this.state.user === null) {
      return (
        <div className="rootDom">
          <Header handleLangClick={this.handleLangClick.bind(this)} />
        <Navigation />
        <Container className="container">
        <Row>
          <Col className="leftContainer">
          <Calender 
          selectedDay={this.state.selectedDay} 
          events={this.state.events}
          selectedLocation={this.state.location}
          foodListHaaga={this.state.haagaAmicaFood}
          foodListPasila={this.state.pasilaAmicaFood}
          foodListMalmi={this.state.malmiAmicaFood}
          handleLocationClick={this.handleLocationClick.bind(this)}
          handleDayClick={this.handleDayClick.bind(this)}/>
        </Col>
          <Col className="rightContainer">
          <Lukkari 
          findByGroupId={this.findLukkariByGroupId.bind(this)}
          lukkariState={this.state.lukkari}
          groupId={this.state.groupId}
          handler={this.handleLoginFieldChange.bind(this)}
          waitMessage={this.state.waitMessage}
          handleAddEvent={this.handleAddEvent.bind(this)}
          />
          <Otherlinks />

          <h5>By logging in you can add your Moodle courses, useful links or notes</h5>
            <Notification message={this.state.error} />
            <LoginForm
            handler={this.handleLoginFieldChange.bind(this)}
            username={this.state.username}
            password={this.state.password}
            loginFnc={this.login.bind(this)}
            />
            <CreateAccountForm 
            username={this.state.username}
            password={this.state.creatingAccountPassword}
            handler={this.handleLoginFieldChange.bind(this)}
            passwordConfirmation={this.state.passwordConfirmation}
            createAccountFnc={this.createAccount.bind(this)}
            />
          <Otherlinks />
          </Col>
        </Row>
       </Container>
       </div>
      )
    } */

    return (
      <div className="rootDom">
          <Header selectedLang={this.state.lang} handleLangClick={this.handleLangClick.bind(this)} />
      <Container className="container">
        <div id="mobileNav">
        <Navigation />
        </div>
          <Col className="rightContainer">
          <Lukkari 
          findByGroupId={this.findLukkariByGroupId.bind(this)}
          lukkariState={this.state.lukkari}
          groupId={this.state.groupId}
          handler={this.handleLoginFieldChange.bind(this)}
          waitMessage={this.state.waitMessage}
          handleWeekChange={this.changeWeekLukkari.bind(this)}
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
          handleDayClick={this.handleDayClick.bind(this)}/>
          <Kideapp 
            selectedDay={this.state.selectedDay}
          /> 
        </Col>
        </Row>
        </Container>
        <Footer></Footer>
        </div>
    );
  }
}

export default App;
