import './App.css';
import HomePage from './components/homepage/homepage';
import Header from './components/header/header';
import Signup from './components/signup/signup';
import Login from './components/loginpage/loginpage';
import PasswordRecovery from './components/password-recover/password-recover';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Router>
        <Header />
        <Switch>
          <Route exact path="/signup"> <Signup /> </Route>
          <Route exact path="/login"> <Login /> </Route>
          <Route exact path="/password-recover"> <PasswordRecovery /> </Route>
          <Route exact path="/home"> <HomePage /> </Route>
          <Route exact path="">
            <Redirect exact from="/" to="/home" />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
