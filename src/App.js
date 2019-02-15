import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Kideapp from './components/KideApp'
import bailataanService from './services/Bailataan'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
      bailataanService.getAll().then(events => {
        this.setState({ events: events.model })
        console.log(this.state)
      })
  }

  render() {
    const dateToday = new Date()
    const dateTomorrow = new Date()
    dateTomorrow.setDate(dateToday.getDate() + 1)
    const tomorrowAsJson = dateTomorrow.toJSON().substr(0, 10).toString()
    console.log(tomorrowAsJson)

    return (
      <div className="App">
        <Nav /> 
          {this.state.events.filter(event => 
          event.dateActualUntil.includes(tomorrowAsJson)).
          map(event => 
          <Kideapp key={event.id} props={event} />)}
       </div>
    );
  }
}

export default App;
