import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
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
      error: null
    }
  }

  componentDidMount() {
    const loggedUser = window.localStorage.getItem('loggedUser')
    const user = JSON.parse(loggedUser)
    console.log(user)
    if (user !== null) {
        userService.findById(user.id)
        .then(res => {
          this.setState({ courses: res.courses })
          console.log(res)
        })
      }

      bailataanService.getAll().then(events => {
        this.setState({ events: events.model })
      })

      userService.getAll().then(events => {
/*         this.setState({ courses: events.courses })
 */        
      })

      const loggedUserJSON = window.localStorage.getItem('loggedUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON) 
        this.setState({ user })
        /* courseService.setToken(user.token) */
        courseService.setToken(user.token) 
      }

      /* amicaService.getAll()
      amicaService.getAll().then(list => {
        this.setState({ foodList: list})
        console.log(this.state.foodList)
      }) */
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
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
        <div className="App">
        <div>
          <Notification message={this.state.error} />
          <h1>Kirjaudu</h1>
          <LoginForm
          handler={this.handleLoginFieldChange.bind(this)}
          username={this.state.username}
          password={this.state.password}
          loginFnc={this.login.bind(this)}
          />
          <CreateAccountForm 
          username={this.state.username}
          password={this.state.password}
          handler={this.handleLoginFieldChange.bind(this)}
          createAccountFnc={this.createAccount.bind(this)}
          passwordConfirmation={this.state.passwordConfirmation}
          />
        </div>
        <div>
        </div>
        <div>
          <Nav /> 
        </div>
        <div>
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
      <div className="App">
        <div>
          <button onClick={this.logout}>LOG OUT</button>
        </div>
        <div>
          {this.state.courses
          .map(course => 
          <Course key={course._id} url={course.url} name={course.name} />
          )}
        </div>
        <div>
          <Nav /> 
        </div>
        <div>
          {this.state.events.filter(event => 
          event.dateActualUntil
          .includes(tomorrowAsJson))
          .map(event => 
          <Kideapp key={event.id} props={event} />)}
        </div>
       </div>
    );
  }
}

export default App;
