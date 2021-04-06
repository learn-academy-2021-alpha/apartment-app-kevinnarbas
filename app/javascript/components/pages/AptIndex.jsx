import React, { Component } from 'react';

class AptIndex extends Component {
  render() {
    const { apts } = this.props;
    const {
      bathroom,
      bedrooms,
      city,
      email,
      manager,
      pets,
      pic,
      price,
      state,
      street,
    } = this.props.apts;
    return (
      <>
        <h1>Apts Index page</h1>
        <ul>
          {apts.map((apt) => {
            return (
              <li>
                {' '}
                <div className='card'>
                  <div className='card-image waves-effect waves-block waves-light'>
                    <img className='activator' src={apt.pic} />
                  </div>
                  <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>
                      {apt.street} {apt.city}, {apt.state}
                      <i className='material-icons right'>more_vert</i>
                    </span>
                    <p>
                      <a href='#'>This is a link</a>
                    </p>
                  </div>
                  <div className='card-reveal'>
                    <span className='card-title grey-text text-darken-4'>
                      Card Title<i className='material-icons right'>close</i>
                    </span>
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default AptIndex;
