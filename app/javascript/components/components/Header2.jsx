import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

const Header2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = props;
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>R&amp;R Apartments</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink tag={Link} to='/aptindex'>
                See Apartments
              </NavLink>
            </NavItem>
            {logged_in && (
              <>
                <NavItem>
                  <NavLink tag={Link} to='/aptnew'>
                    Add Apt
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/userpage'>
                    Edit profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={sign_out_route}>Sign Out</NavLink>
                </NavItem>
              </>
            )}
            {!logged_in && (
              <>
                <NavItem>
                  <NavLink href={new_user_route}>Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={sign_in_route}>Sign In</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
          {logged_in && (
            <NavbarText>Welcome {current_user.email.split('@')[0]}!</NavbarText>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header2;
