import React, { Component } from 'react';
import {Router, Route, Link} from "react-dom";
import axios from "axios"
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getAllBooks(){
    axios.get("http://localhost:5000/books",)
  }
  render() {
    return (
      <div>
        <Router>
          <Route Link to ="/library/create-book">
            <form onSubmit={()=>{}}>
              <input type="text"/>
            </form>

          </Route>
          <Route Link to ="/library">

          </Route>
        </Router>

      </div>
    );
  }
}