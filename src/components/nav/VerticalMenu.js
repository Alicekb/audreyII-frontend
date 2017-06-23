import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image, Menu } from 'semantic-ui-react'
import logo from '../Main/logo.svg'

export default class VerticalMenu extends Component {
  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return(
      <div className='printing-display' >
        {
          this.props.loggedIn ?
          <Menu>
            <Menu.Item name='audreyII'>
              AUDREYII
            </Menu.Item>
            <Menu.Item name='welcome'>
              <Link to='/welcome'>Home</Link>
            </Menu.Item>
            <Menu.Item name='calendar'>
              <Link to='/calendar'>Calendar</Link>
            </Menu.Item>
            <Menu.Item name='calendar' onClick={() => this.props.logout()}>
              <Link to='/'>Log Out</Link>
            </Menu.Item>
          </Menu> :
            null
        }
      </div>
    )
  }
}