import React from 'react';
import apts from './mockApts';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AptIndex from './pages/AptIndex';
import AptShow from './pages/AptShow';
import UserPage from './pages/UserPage';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apts: apts,
    };
  }
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
    return (
      <Router>
        <Header
          logged_in={logged_in}
          current_user={current_user}
          new_user_route={new_user_route}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/aptindex' render={() => <AptIndex apts={apts} />} />
          <Route
            path='/aptshow/:id'
            render={(props) => {
              const id = +props.match.params.id;
              const singleApt = this.state.apts.find((apt) => apt.id === id);
              return <AptShow apt={singleApt} />;
            }}
          />
          <Route path='/userpage' render={() => <UserPage />} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
