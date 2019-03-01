import React, { Component } from 'react';
import Navigation from './components/Nav'
import bailataanService from './services/Bailataan'
import amicaService from './services/Amica'
import courseService from './services/Courses'
import lukkariService from './services/Lukkari'
import Calender from './components/Calender'
import loginService from './services/Login'
import createAccountService from './services/CreateAccount'
import userService from './services/Users'
import Otherlinks from './components/Otherlinks'
import Header from './components/Header'
import Feedbackform from './components/Feedbackform'
import Lukkari from './components/Lukkari'
import './components/css/components.css'
import { Row, Col, Container } from 'react-bootstrap'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      /* courses: [],
      username: '',
      password: '',
      creatingAccountPassword: '',
      passwordConfirmation: '',
      user: null,
      newName: '',
      newUrl: '',
      error: null,
      courseName: '',
      courseUrl: '', */
      selectedDay: 0,
      calenderLink: '',
      pasilaAmicaFood: [],
      malmiAmicaFood: [],
      haagaAmicaFood: [],
      location: 'Pasila',
      lukkari: '<div>Not available right now</div>',
      groupId: '',
      waitMessage: '',
      lang: 'fi'
    }
  }

  // calls when first render is ready
  componentDidMount() {
    const loggedUser = window.localStorage.getItem('loggedUser')
    const user = JSON.parse(loggedUser)
    // log user in if has already localstorage already set
    if (loggedUser) { 
      this.setState({ user })
      courseService.setToken(user.token) 

      // get courses for the logged user
      userService.findById(user.id)
        .then(res => {
          this.setState({ courses: res })
        })
    }

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


      bailataanService.getAllKideApp()
        .then(events => {
          this.setState({ events: events.model })
        })
      let id = 'tn2'
      const userLukkari = window.localStorage.getItem('lukkariTunnus')
      if (userLukkari) {
        id = userLukkari
        this.setState({ waitMessage: `Timetable for ${id}` })
      }
      console.log(id)
      lukkariService.findByGroupId(id)
      .then(response => {
        this.setState({ lukkari: response },
        () =>  {
          /* const thisDayInWeek = new Date().getDay()
          if (document.getElementById(`wd${thisDayInWeek}`)) {
          const thisDayInLukkari = document.getElementById(`wd${thisDayInWeek}`).parentNode
          thisDayInLukkari.style.backgroundColor = '#b7d8e5'
          } */
         
          const thisDayInLukkariTop = document.getElementsByClassName('nd today')
          if (thisDayInLukkariTop[0]) {
            thisDayInLukkariTop[0].scrollIntoView(false)
          }
        })
      })
      

      document.getElementById(new Date().getDay()).classList.add('btn-success')
      

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

  handleLocationClick = (event, value) => {
    this.setState({ location: value })
  }

  handleLangClick = (event, value) => {
    this.findLunchMenus(this.state.lang === 'fi' ? 'en' : 'fi')
    this.setState({ lang: this.state.lang === 'fi' ? 'en' : 'fi' })
  }

  handleDayClick = (day) => {
    const thisDayInWeek = new Date().getDay()
    // day - getDay
    this.setState({ selectedDay: day - thisDayInWeek })
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  findLukkariByGroupId = (event, id) => {
    event.preventDefault()
    window.localStorage.removeItem('lukkariTunus')
    window.localStorage.setItem('lukkariTunnus', this.state.groupId)
    this.setState({ waitMessage: 'Finding group ' + this.state.groupId + '..'})
    lukkariService.findByGroupId(id)
      .then(response => {
        this.setState({ lukkari: response, groupId: '', waitMessage: 'Timetable for ' + this.state.groupId },
        () =>  {
          /* const thisDayInWeek = new Date().getDay()
          if (document.getElementById(`wd${thisDayInWeek}`)) {
            const thisDayInLukkari = document.getElementById(`wd${thisDayInWeek}`).parentNode
            thisDayInLukkari.style.backgroundColor = '#b7d8e5'
          } */
          const thisDayInLukkariTop = document.getElementsByClassName('nd today')
          if (thisDayInLukkariTop[0]) {
            thisDayInLukkariTop[0].scrollIntoView(false)
          }
        })
      })
  }

  createCourse = (event) => {
    event.preventDefault()
    
    const newObject = {
      name: this.state.courseName,
      url: this.state.courseUrl,
      user: this.state.user
    } 
    this.setState({
      courseName: '',
      courseUrl: ''
    })
    courseService.create(newObject)
    .then(newCourse => {
      this.setState({ courses: this.state.courses.concat(newCourse)})
    })
    this.Newcourse.toggleVisibility()
  }

  deleteCourse = (event, course) => {
    event.preventDefault()
    courseService.del(course)

    // delete the course from state so it doesn't show on render
    let array = [...this.state.courses]
    const index = array.indexOf(course)
    if (index !== -1) {
      array.splice(index, 1)
      this.setState({ courses: array })
    }
  }



  createAccount = (event) => {
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
        : this.CreateAccountForm.toggleVisibility()
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
}


  render() {
    
    if (this.state.user === null) {
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
          />
          <Otherlinks />

          {/* <h5>By logging in you can add your Moodle courses, useful links or notes</h5>
          <Togglable variantForButton="success" buttonLabel="Login">
            <Notification message={this.state.error} />
            <LoginForm
            handler={this.handleLoginFieldChange.bind(this)}
            username={this.state.username}
            password={this.state.password}
            loginFnc={this.login.bind(this)}
            />
          </Togglable>
          <Togglable ref={component => this.CreateAccountForm = component} variantForButton="primary" buttonLabel="Create account">
            <Notification message={this.state.error} />
            <CreateAccountForm 
            username={this.state.username}
            password={this.state.creatingAccountPassword}
            handler={this.handleLoginFieldChange.bind(this)}
            createAccountFnc={this.createAccount.bind(this)}
            passwordConfirmation={this.state.passwordConfirmation}
            />
          </Togglable> */}
          <Otherlinks />
          </Col>
        </Row>
       </Container>
       </div>
      )
    }

    return (
      <div className="rootDom">
          <Header selectedLang={this.state.lang} handleLangClick={this.handleLangClick.bind(this)} />
      <Navigation /> 
      <Container className="container">
          <div className="rightContainer">
          <Col>
          <Lukkari 
          findByGroupId={this.findLukkariByGroupId.bind(this)}
          lukkariState={this.state.lukkari}
          groupId={this.state.groupId}
          handler={this.handleLoginFieldChange.bind(this)}
          waitMessage={this.state.waitMessage}
          />   
          <Feedbackform />
     
          {/* <Togglable ref={component => this.Newcourse = component} variantForButton="success" buttonLabel="Add course, link or note">
          <Newcourse 
          name={this.state.courseName}
          url={this.state.courseUrl}
          handler={this.handleLoginFieldChange.bind(this)}
          createCourseFnc={this.createCourse.bind(this)}
          />
        </Togglable>
          <Course
          courses={this.state.courses} 
          deleteCourse={this.deleteCourse} />
          <Button className="logOutButton" onClick={this.logout} variant="info">LOG OUT</Button> */}
          </Col>
          </div>
          <Row>
          <div className="leftContainer">
       <Col>
          <Calender 
          selectedDay={this.state.selectedDay} 
          events={this.state.events}
          foodListPasila={this.state.pasilaAmicaFood}
          foodListMalmi={this.state.malmiAmicaFood}
          foodListHaaga={this.state.haagaAmicaFood}
          selectedLocation={this.state.location}
          handleLocationClick={this.handleLocationClick.bind(this)}
          handleDayClick={this.handleDayClick.bind(this)}/>
        <Otherlinks />
        </Col>
        </div>

        </Row>
        </Container>
        </div>
    );
  }
}

export default App;
