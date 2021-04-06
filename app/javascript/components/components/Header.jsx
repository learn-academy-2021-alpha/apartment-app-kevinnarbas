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
    return (
      <>
        <h1>R&amp;R Apartments</h1>
        {logged_in && (
          <div>
            <p>Hello {current_user.email.split('@')[0]}!</p>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        )}
        {!logged_in && (
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        )}
        <NavLink to={'/aptindex'}>See Apartments</NavLink>
      </>
    );
  }
}

export default Header;
