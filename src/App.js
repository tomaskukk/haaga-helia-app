import React, { Component } from 'react';
import Navigation from './components/Nav'
import Kideapp from './components/KideApp'
import bailataanService from './services/Bailataan'
import amicaService from './services/Amica'
import courseService from './services/Courses'
import LoginForm from './components/Login'
import loginService from './services/Login'
import createAccountService from './services/CreateAccount'
import Course from './components/Course'
import userService from './services/Users'
import Users from './services/Users';
import Notification from './components/Notification'
import CreateAccountForm from './components/CreateAccountForm'
import Newcourse from './components/Newcourse'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import img from './img/kide_app.png'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      foodList: [],
      courses: [],
      username: '',
      password: '',
      passwordConfirmation: '',
      user: null,
      newName: '',
      newUrl: '',
      error: null,
      courseName: '',
      courseUrl: ''
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
          this.setState({ courses: res.courses })
          console.log(res)
        })
    }
      // get bailataan events from their REST api
      bailataanService.getAll().then(events => {
        this.setState({ events: events.model })
      })
      /* amicaService.getAll()
      amicaService.getAll().then(list => {
        this.setState({ foodList: list})
        console.log(this.state.foodList)
      }) */
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
  }

  deleteCourse = (event, course) => {
    event.preventDefault()
    courseService.del(course)

    this.componentDidMount()
  }

  createAccount = (event) => {
    event.preventDefault()
    console.log("LUODAAN KÄYTTÄJÄ")
    if (this.state.password !== this.state.passwordConfirmation
       || this.state.password === '') {
      this.setState({ 
        error: 'Salasanat eivät täsmää tai kenttä on tyhjä',
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
    const userObject = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.username
    }    
    this.setState({
      password: '',
      passwordConfirmation: ''
    })
    createAccountService.create(userObject)
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
      error: 'käyttäjätunnus tai salasana väärin'
    })
    setTimeout(() => {
      this.setState({ error: null })
    }, 5000)
  }
}


  render() {
    const dateToday = new Date()
    const dateTomorrow = new Date()
    dateTomorrow.setDate(dateToday.getDate() + 1)
    const tomorrowAsJson = dateTomorrow.toJSON().substr(0, 10).toString() 

    if (this.state.user === null) {
      return (
        <div className="container">
        <Navigation />
        <div>
          <Notification message={this.state.error} />
          <h3>Kirjaudu</h3>
          <p>Kirjautumalla saat lisättyä haluamasi moodle
            kurssit, joita painamalla pääset suoraan kurssin
            sivulle
          </p>
          <Togglable buttonLabel="Login">
            <LoginForm
            handler={this.handleLoginFieldChange.bind(this)}
            username={this.state.username}
            password={this.state.password}
            loginFnc={this.login.bind(this)}
            />
          </Togglable>
          <br></br>
          <h3>Luo käyttäjä</h3>
          <Togglable buttonLabel="Create account">
            <CreateAccountForm 
            username={this.state.username}
            password={this.state.password}
            handler={this.handleLoginFieldChange.bind(this)}
            createAccountFnc={this.createAccount.bind(this)}
            passwordConfirmation={this.state.passwordConfirmation}
            />
          </Togglable>
        </div>
        <div>
          <h3>Opiskelijajuhlat tänään Helsingissä</h3>
          {this.state.events.filter(event => 
          event.dateActualUntil
          .includes(tomorrowAsJson))
          .map(event => 
          <Kideapp key={event.id} props={event} />)}
        </div>
       </div>
      )
    }

    return (
      <div className="container">
        
        <div>
        <div>
          <Navigation /> 
        </div>
          <h3>Sinun kurssisi</h3>
          </div>
        <Togglable buttonLabel="Tallenna uusi kurssi">
          <Newcourse 
          name={this.state.courseName}
          url={this.state.courseUrl}
          handler={this.handleLoginFieldChange.bind(this)}
          createCourseFnc={this.createCourse.bind(this)}
          />
        </Togglable>
        <div>
          {this.state.courses
          .map(course => 
          <Course key={course._id} 
          course={course} 
          deleteCourse={this.deleteCourse} />
          )}
          <h3>Opiskelijajuhlat tänään Helsingissä</h3 >
          {this.state.events.filter(event => 
          event.dateActualUntil
          .includes(tomorrowAsJson))
          .map(event => 
          <Kideapp key={event.id} props={event} />
          )}
        </div>
        <div>
          <Button onClick={this.logout} variant="success">LOG OUT</Button>
        </div>
       </div>
    );
  }
}

class Togglable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render () {
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }
  
    return (
      <div className="d-inline">
        <div style={hideWhenVisible}>
          <Button variant="success"
          onClick={this.toggleVisibility}>
          {this.props.buttonLabel}
          </Button>
        </div>
        <div style={showWhenVisible}>
          {this.props.children}
          <br></br>
          <Button variant="warning"
          onClick={this.toggleVisibility}>Cancel</Button>
        </div>
      </div>
    )
  
  }


}
export default App;
