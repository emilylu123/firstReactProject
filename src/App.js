import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from "./shared/dishes";
import Menu from './components/MenuComponent';
import DishDetail from './components/DishdetailComponent';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes:DISHES
        };
    }
  render() {
    return (
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            {/*dishes are available as props and can be accessed as this.props.dishes*/}
            <Menu dishes={this.state.dishes} />
        </div>
    );
  }
}

export default App;