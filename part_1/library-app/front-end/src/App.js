import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getAllBooks() {
    axios.get("http://localhost:5000/books", (err, response) => {
      this.setState({ books: [...response] });
    });
  }
  getBookById() {
    axios.get("http://localhost:5000/books/3",(err, response) => {
      this.setState({book_3 : [...response]})
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Route path="/library/create-book">
            <form onSubmit={() => {}}>
              <input type="text" />
            </form>
          </Route>
          <Route path="/library">
            {this.state.books}
          </Route>
          <Route path="/library/:book_id">
            {this.state.book3}
          </Route>
        </Router>
      </div>
    );
  }
}
