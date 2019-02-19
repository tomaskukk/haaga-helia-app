import React, { Component } from 'react';
import Navigation from './components/Nav'
import bailataanService from './services/Bailataan'
import amicaService from './services/Amica'
import courseService from './services/Courses'
import LoginForm from './components/Login'
import Togglable from './components/Togglable'
import Calender from './components/Calender'
import loginService from './services/Login'
import createAccountService from './services/CreateAccount'
import Course from './components/Course'
import userService from './services/Users'
import Notification from './components/Notification'
import CreateAccountForm from './components/CreateAccountForm'
import Newcourse from './components/Newcourse'
import Button from 'react-bootstrap/Button'
import './components/css/components.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Ruokalista from './components/Ruokalista'
import KideApp from './components/KideApp'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      courses: [],
      username: '',
      password: '',
      passwordConfirmation: '',
      user: null,
      newName: '',
      newUrl: '',
      error: null,
      courseName: '',
      courseUrl: '',
      selectedDay: new Date(),
      calenderLink: '',
      pasilaAmicaFood: [],
      malmiAmicaFood: [],
      haagaAmicaFood: [],
      location: 'Pasila'
    }
  }

  // calls when first render is ready
  componentDidMount() {
    const loggedUser = window.localStorage.getItem('loggedUser')
    const user = JSON.parse(loggedUser)
    console.log(user)
    // log user in if has already localstorage already set
    if (loggedUser) { 
      this.setState({ user })
      courseService.setToken(user.token) 

      userService.findById(user.id)
        .then(res => {
          this.setState({ courses: res })
          console.log(res)
        })
    }

      bailataanService.getAll()
        .then(events => {
          this.setState({ events: events.model })
        })
      amicaService.getAllPasila()
        .then(lunchMenus => {
          this.setState({ pasilaAmicaFood: lunchMenus.LunchMenus })
        })
      amicaService.getAllMalmi()
        .then(lunchMenus => {
        this.setState({ malmiAmicaFood: lunchMenus.LunchMenus })
      })
      amicaService.getAllHaaga()
        .then(lunchMenus => {
        this.setState({ haagaAmicaFood: lunchMenus.LunchMenus })
      })
      
  }

  handleLocationClick = (event, value) => {
    this.setState({ location: value })
  }

  handleDayClick = (day, { selected } ) => {
    this.setState({ selectedDay: day })
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  

  createCourse = (event) => {
    event.preventDefault()
    
    console.log("LUODAAN KURSSI")
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

    let array = [...this.state.courses]
    const index = array.indexOf(course)
    if (index !== -1) {
      array.splice(index, 1)
      this.setState({ courses: array })
    }
  }



  createAccount = (event) => {
    event.preventDefault()
    console.log("LUODAAN KÄYTTÄJÄ")
    if (this.state.password !== this.state.passwordConfirmation
       || this.state.password === '') {
      this.setState({ 
        error: 'Passwords does not match or field is empty',
        password: '',
        passwordConfirmation: ''
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 3000)
      console.log("SALASANAT EIVÄT TÄSMÄÄ")
      return
    }
    console.log("SALASANAT TÄSMÄÄÄVÄT")
    this.setState({error : 'Creating account...'})
    const userObject = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.username
    }    
    this.setState({
      password: '',
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
    console.log("YRITETÄÄ KIRJAUTUA")
    const user = await loginService.login({
      username: this.state.username,
      password: this.state.password
    })

    console.log(user)
    console.log(user.token)
    window.localStorage.setItem('loggedUser', JSON.stringify(user))
    courseService.setToken(user.token)
    this.setState({ username: '', password: '', user })
    console.log(this.state.user)
    this.componentDidMount()
  } catch(exception) {
    console.log("KÄYTTÄJÄTUNNUS TAI SALASANA VÄÄRIN")
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
        <Navigation />
        <Container className="container">
        <Row>
          <Col>
        <div className="basicContainer">
          <h3>Log in</h3>
          <p>Logging in lets you save your Moodle courses and access them with just one click
          </p>
          <Togglable variantForButton="success" buttonLabel="Login">
            <Notification message={this.state.error} />
            <LoginForm
            handler={this.handleLoginFieldChange.bind(this)}
            username={this.state.username}
            password={this.state.password}
            loginFnc={this.login.bind(this)}
            />
          </Togglable>
          </div>
          <br></br>
          <div className="basicContainer">
          <Togglable ref={component => this.CreateAccountForm = component} variantForButton="primary" buttonLabel="Create account">
            <Notification message={this.state.error} />
            <CreateAccountForm 
            username={this.state.username}
            password={this.state.password}
            handler={this.handleLoginFieldChange.bind(this)}
            createAccountFnc={this.createAccount.bind(this)}
            passwordConfirmation={this.state.passwordConfirmation}
            />
          </Togglable>
        </div>
        </Col>
        </Row>
        <Row>
          <Col>
        <div className="secondContainer">
          <Calender 
          selectedDay={this.state.selectedDay} 
          events={this.state.events}
          selectedLocation={this.state.location}
          foodListPasila={this.state.pasilaAmicaFood}
          foodListMalmi={this.state.malmiAmicaFood}
          handleLocationClick={this.handleLocationClick.bind(this)}
          handleDayClick={this.handleDayClick.bind(this)}/>
        </div>
        </Col>
        </Row>
       </Container>
       </div>
      )
    }

    return (
      <div className="rootDom">
      <Navigation /> 
      <Container className="container">
        <Row>
        <Col>
        <div className="basicContainer">
          <h3>Your courses</h3>
          <Togglable ref={component => this.Newcourse = component} variantForButton="success" buttonLabel="Add new course to table">
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
        <br></br>
        <div>
          <Button onClick={this.logout} variant="info">LOG OUT</Button>
          </div>
       </div>
       </Col>
       </Row>
       <Row>
       <Col>
       <div className="secondContainer">
          <Calender 
          selectedDay={this.state.selectedDay} 
          events={this.state.events}
          foodListPasila={this.state.pasilaAmicaFood}
          foodListMalmi={this.state.malmiAmicaFood}
          foodListHaaga={this.state.haagaAmicaFood}
          selectedLocation={this.state.location}
          handleLocationClick={this.handleLocationClick.bind(this)}
          handleDayClick={this.handleDayClick.bind(this)}/>
        </div>
       {/* <div>
          <Lukkari />
        </div> */}
        </Col>
        </Row>
        </Container>
        </div>
    );
  }
}

export default App;
