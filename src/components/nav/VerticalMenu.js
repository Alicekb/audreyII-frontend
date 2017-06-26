import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class VerticalMenu extends Component {
  render() {
    return(
      <div className='printing-display' >
        {
          this.props.loggedIn ?
          <Menu style={{marginBottom: '1em'}}>
            <Menu.Item name='audreyII'>
              AUDREYII
            </Menu.Item>
            <Link to='/welcome'>
              <Menu.Item name='welcome'>
                Home
              </Menu.Item>
            </Link>
            <Link to='/calendar'>
              <Menu.Item name='Calendar'>
                Calendar
              </Menu.Item>
            </Link>
            <Menu.Item position='right' name='logout' onClick={() => this.props.logout()} />
          </Menu> :
            null
        }
      </div>
    )
  }
}