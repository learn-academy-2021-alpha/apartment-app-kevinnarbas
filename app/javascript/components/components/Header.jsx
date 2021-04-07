import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    console.log(this.props);
    return (
      <>
        <nav>
          <div className='nav-wrapper'>
            <NavLink to={'/'} className='brand-logo'>
              R&amp;R Apartments
            </NavLink>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <NavLink to={'/aptindex'}>See Apartments</NavLink>
              </li>
              {logged_in && (
                <>
                  <li>
                    <NavLink to={'/userpage'}>
                      Hello {current_user.email.split('@')[0]}!
                    </NavLink>
                  </li>
                  <li>
                    <a href={sign_out_route}>Sign Out</a>
                  </li>
                </>
              )}
              {!logged_in && (
                <li>
                  <a href={sign_in_route}>Sign In</a>
                </li>
              )}
              <li></li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
