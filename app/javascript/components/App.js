import React from 'react';
import apts from './mockApts';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import Home from './pages/Home';
import AptIndex from './pages/AptIndex';
import AptShow from './pages/AptShow';
import AptNew from './pages/AptNew';
import UserPage from './pages/UserPage';
import PropTypes, { arrayOf } from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apts: [],
    };
  }

  componentDidMount() {
    this.aptIndex();
  }

  aptIndex = () => {
    fetch('http://localhost:3000/apartments')
      .then((response) => {
        return response.json();
      })
      .then((arrayOfApts) => {
        this.setState({ apts: arrayOfApts });
      })
      .catch((errors) => {
        console.log('index errors', errors);
      });
  };

  createNewApt = (newApt) => {
    fetch('http://localhost:3000/apartments', {
      body: JSON.stringify(newApt),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => {
        if (response.status === 422) {
          alert('Something is a muck');
        } else {
          return response.json();
        }
      })
      .then((payload) => {
        this.aptIndex();
      })
      .catch((errors) => {
        console.log('create errors', errors);
      });
  };

  render() {
    // email: kevinn@mail.com pw: 123456
    const { apts } = this.state;
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    console.log(this.state.apts);
    return (
      <Router>
        <Header2
          logged_in={logged_in}
          current_user={current_user}
          new_user_route={new_user_route}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Home current_user={current_user} logged_in={logged_in} />
            )}
          />
          <Route path='/aptindex' render={() => <AptIndex apts={apts} />} />
          <Route
            path='/aptshow/:id'
            render={(props) => {
              const id = +props.match.params.id;
              const singleApt = apts.find((apt) => apt.id === id);
              return <AptShow apt={singleApt} current_user={current_user} />;
            }}
          />
          <Route
            path='/aptnew'
            render={() => <AptNew createNewApt={this.createNewApt} />}
          />
          <Route
            path='/userpage'
            render={() => {
              const id = current_user.id;
              const userApts = apts.filter((apt) => apt.user_id === id);
              return <UserPage apts={userApts} current_user={current_user} />;
            }}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
