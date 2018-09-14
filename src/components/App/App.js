import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar';
import HomePage from '../HomePage';
import { Switch, Route } from "react-router-dom";
import TodoForm from '../Forms/AddTodo'
import Footer from '../Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route expact path="/add" component={TodoForm} />
      </Switch>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
