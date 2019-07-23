import React, { Component } from "react";

class QuizEnd extends Component {
  handleResetclick() {
    this.props.resetClickHandler();
  }
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a onClick={this.handleResetclick.bind(this)} href="#">
          Reset Quiz
        </a>
      </div>
    );
  }
}

export default QuizEnd;
