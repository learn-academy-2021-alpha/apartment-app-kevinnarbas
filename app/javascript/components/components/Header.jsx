import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

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
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
      <>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/components/'>Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>
            R&amp;R Apartments
          </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink to={'/aptindex'}>See Apartments</NavLink>
            </NavItem>
            {logged_in && (
              <>
                <NavItem>
                  <NavLink to={'/aptnew'}>Add Apt</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={'/userpage'}>
                    Hello {current_user.email.split('@')[0]}!
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a href={sign_out_route}>Sign Out</a>
                </NavItem>
              </>
            )}
            {!logged_in && (
              <>
                <NavItem>
                  <a href={new_user_route}>Sign Up</a>
                </NavItem>
                <NavItem>
                  <a href={sign_in_route}>Sign In</a>
                </NavItem>
              </>
            )}
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Header;
