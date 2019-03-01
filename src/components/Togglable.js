import React from 'react'
import Button from 'react-bootstrap/Button'
import DropDown from 'react-bootstrap/Dropdown'
import DropdownItem from 'react-bootstrap/DropdownItem'
import { DropdownButton } from 'react-bootstrap';


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
        <DropDown>
          <DropdownButton className="toggleButton" variant={this.props.variantForButton}
          title={this.props.buttonLabel}>
            <DropdownItem className="dropDownLocationButton" onClick={(event) => { this.props.handleLocationClick(event, 'Pasila'); this.toggleVisibility()}}>Pasila</DropdownItem>
            <DropdownItem className="dropDownLocationButton" onClick={(event) => { this.props.handleLocationClick(event, 'Malmi'); this.toggleVisibility()}}>Malmi</DropdownItem>
            <DropdownItem className="dropDownLocationButton" onClick={(event) => { this.props.handleLocationClick(event, 'Haaga'); this.toggleVisibility()}}>Haaga</DropdownItem>
            </DropdownButton>
          </DropDown>
        </div>
        <div style={showWhenVisible}>
          <Button className="toggleButton" variant="warning"
          onClick={this.toggleVisibility}>Cancel</Button>
          {this.props.children}
          <br></br>
        </div>
      </div>
    )
  }
}

export default Togglable