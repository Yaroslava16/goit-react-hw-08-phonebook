import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from '../redux/auth';
import RegisterView from '../views/RegisterView';
import Container from './Container/Conteiner';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import ContactsView from '../views/ContactsView';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <BrowserRouter>
          <AppBar />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/login" component={LoginView} />
            <Route path="/contacts" component={ContactsView} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
