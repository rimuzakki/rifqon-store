import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
