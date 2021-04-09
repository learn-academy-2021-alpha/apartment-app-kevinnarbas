import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: '',
    };
  }

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({ hour: hour });
  };

  render() {
    const { hour } = this.state;
    const { logged_in, current_user } = this.props;
    let timeOfDay;
    if (hour < 12) {
      timeOfDay = 'Good Morning';
    } else if (hour > 12 && hour < 18) {
      timeOfDay = 'Good Afternoon';
    } else {
      timeOfDay = 'Good Evening';
    }

    return (
      <>
        <div className='home'>
          {logged_in ? (
            <h1 className='greeting'>
              {timeOfDay} <br /> {current_user.email.split('@')[0]}!
            </h1>
          ) : (
            <h1 className='greeting'>
              {timeOfDay} <br /> Welcome to R&amp;R Apartments
            </h1>
          )}
        </div>
      </>
    );
  }
}

export default Home;
