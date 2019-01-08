import React, { Component } from "react";
import Book from "./Book";
import BooksData from "./data";
// import Button from "./button";

class BookList extends Component {
  state = {
    books: BooksData
  };

  handleClick = () => {
    console.log("I am from booklist");
  };

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Best Selling Books this week</h2>
        {this.state.books.map(book => (
          <Book info={book} key={book.id} />
        ))}
        {/* <Button /> */}
      </div>
    );
  }
}

export default BookList;
