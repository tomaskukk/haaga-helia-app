import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Kideapp from './components/KideApp'
import bailataanService from './services/Bailataan'
import amicaService from './services/Amica'
import courseService from './services/Courses'
import LoginForm from './components/Login'
import loginService from './services/Login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      foodList: [],
      username: '',
      password: '',
      user: null,
      newName: '',
      newUrl: '',
      error: null
    }
  }

  componentDidMount() {
      bailataanService.getAll().then(events => {
        this.setState({ events: events.model })
        console.log(this.state.events)
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
        <div>
          <h1>Kirjaudu</h1>
          <LoginForm
          handler={this.handleLoginFieldChange.bind(this)}
          username={this.state.username}
          password={this.state.password}
          loginFnc={this.login.bind(this)}
          />
        </div>
      )
    }

    return (
      <div className="App">
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
    );
  }
}

export default App;
