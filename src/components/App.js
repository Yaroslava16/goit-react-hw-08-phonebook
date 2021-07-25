import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../redux/auth';
import RegisterView from '../views/RegisterView';
import Container from './Container/Conteiner';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import ContactsView from '../views/ContactsView';
import PrivatRoute from './PrivatRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <PrivatRoute path="/contacts" component={ContactsView} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
