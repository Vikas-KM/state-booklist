import React, { Component } from "react";
import "./App.css";
import BookList from "./component/BookList";

class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

export default App;
