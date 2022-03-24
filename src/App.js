import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";


import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import Proba from "./sajatosztalyok/Proba";
import Kviz from "./sajatosztalyok/Kviz";

import Torol from "./sajatosztalyok/Torol";

import Kommentek from "./sajatosztalyok/Kommentek";
import Adatfelv from "./sajatosztalyok/Adatfelv";
import Kommentor from "./sajatosztalyok/Kommentor";



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (


      <div>
        
        
        <Navbar collapseOnSelect style={{backgroundColor:"#00FF00"}} >
      <Navbar.Brand href="home">
        
        Főoldal
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link  href="Kviz">Kvíz</Nav.Link>
          <Nav.Link href="Kommentek">Komment írás</Nav.Link>

          {showAdminBoard&&(
          <NavDropdown title="Admin" id="collasible-nav-dropdown">
            <NavDropdown.Item href="Torol">Kérdés törlés</NavDropdown.Item>
            <NavDropdown.Item href="Adatfelv">  Kérdés frissítés </NavDropdown.Item>
            <NavDropdown.Item href="Kommentor">  Komment törlés </NavDropdown.Item>
          </NavDropdown>
          )}
        </Nav>
        

        <Nav>
        {currentUser ? (
          <Nav>
          <Nav.Link href="/profile">
             {currentUser.username}
              </Nav.Link>
               <Nav.Link href="/login" onClick={this.logOut}>
               Kijelentkezés
                </Nav.Link></Nav>
          ) : (
            <Nav>
            <Nav.Link href="/login">
               Bejelentkezés
                </Nav.Link>
                 <Nav.Link href="/register">
                 Regisztráció
                  </Nav.Link></Nav>

          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>








{/*/   regi      */}
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />

            <Route path="/Proba" component={Proba} />
            <Route path="/Kviz" component={Kviz} />
            <Route path="/Torol" component={Torol} />
            <Route path="/Kommentek" component={Kommentek} />
            <Route path="/Adatfelv" component={Adatfelv} />
            <Route path="/Kommentor" component={Kommentor} />
            
          </Switch>
        </div>
      </div>

      
    );
  }
}

export default App;
