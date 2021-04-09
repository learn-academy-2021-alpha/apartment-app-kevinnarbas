import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AptShow extends Component {
  render() {
    const {
      bathrooms,
      bedrooms,
      city,
      email,
      id,
      manager,
      pets,
      pic,
      price,
      state,
      street,
    } = this.props.apt;
    const { current_user } = this.props;
    console.log(this.props.apt);
    return (
      <>
        <h2>
          {street} {city}, {state}
        </h2>
        <h5>
          {bedrooms}/{bathrooms} bath
        </h5>
        <h5>{price}</h5>
        <img src={pic} alt='apartment picture' style={{ width: '100%' }} />
        <p>
          <b>Pets allowed</b>: {pets}
        </p>
        <p>
          <b>Contact</b>: {manager} for availability.
        </p>
        <p>
          <b>Email</b>: {email}
        </p>
        {current_user.id === id && <NavLink to={'/'}>Edit Apartment</NavLink>}
      </>
    );
  }
}

export default AptShow;
