import React, { Component } from "react";
// import Button from "./button";

class Book extends Component {
  state = {
    count: 0
  };

  addClickHandler = () => {
    console.log("You Clicked");
    this.setState({
      count: this.state.count + 1
    });
  };
  subClickHandler = () => {
    console.log("You Clicked");
    this.setState({
      count: this.state.count - 1
    });
  };
  resetClickHandler = () => {
    console.log("You Clicked");
    this.setState({
      count: 0
    });
  };

  render() {
    const { image, title, author } = this.props.info;
    const { handleClick } = this.props;
    return (
      <div className="book">
        <img src={image} alt="book" style={{ width: "150px" }} />
        <div>
          <h4>Title:{title}</h4>
          <h6>Author:{author}</h6>
          <button style={{ margin: "2px" }} onClick={this.addClickHandler}>
            Add Count
          </button>
          <button style={{ margin: "2px" }} onClick={this.subClickHandler}>
            Sub Count
          </button>
          <button style={{ margin: "2px" }} onClick={this.resetClickHandler}>
            Reset Count
          </button>
          {/* <Button handleClick={handleClick}/> */}
          <h2> Count: {this.state.count}</h2>
        </div>
      </div>
    );
  }
}

export default Book;
