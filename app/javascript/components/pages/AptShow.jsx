import React, { Component } from 'react';

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
        <div className='container'>
          <img src={pic} alt='apartment picture' style={{ width: '100%' }} />
        </div>
        <p>
          <b>Pets allowed</b>: {pets}
        </p>
        <p>
          <b>Contact</b>: {manager} for availability.
        </p>
        <p>
          <b>Email</b>: {email}
        </p>
      </>
    );
  }
}

export default AptShow;
