import { Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../redux/auth';
import RegisterView from '../views/RegisterView';
import Container from './Container/Conteiner';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import ContactsView from '../views/ContactsView';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivatRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
