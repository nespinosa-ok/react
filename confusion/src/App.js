import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Navbar dark color="primary"  expand="md">
        <div className="container">
          <NavbarBrand href='https://www.google.com'>Ristorant Confusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}
}
export default App;
