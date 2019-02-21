import React from 'react'
import Button from 'react-bootstrap/Button'

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
          <Button className="toggleButton" variant={this.props.variantForButton}
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

export default Togglable