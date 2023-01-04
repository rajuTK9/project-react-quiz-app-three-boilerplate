import React, { Component } from "react";
import questions from "../resources/quizQuestion.json";
import { Link } from "react-router-dom";

export default class QuizComponent extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      score: 0,
      attempted: 0,
    };
  }

  evaluate = (e) => {
    this.next();
    this.setState({ attempted: this.state.attempted + 1 });
    if (questions[this.state.i].answer === e.target.innerText) {
      this.setState({ score: this.state.score + 1 });
      alert("Correct Answer");
    } else {
      alert("Wrong Answer");
    }
  };

  next = (e) => {
    if (this.state.i < questions.length - 1) {
      this.setState({ i: this.state.i + 1 });
    }
  };

  prev = () => {
    if (this.state.i > 0) {
      this.setState({ i: this.state.i - 1 });
    }
  };
  quit() {
    alert("Are you sure you want to quit ?");
  }

  render() {
    return (
      <div className="container">
        <div className="mainBox">
          <div className="counter">{this.state.i + 1} of 15</div>
          <h1>Question</h1>
          <p className="question">{questions[this.state.i].question}</p>
          <div className="options">
            <button className="mcq btn" onClick={this.evaluate} id="a">
              {questions[this.state.i].optionA}
            </button>
            <button className="mcq btn" onClick={this.evaluate} id="b">
              {questions[this.state.i].optionB}
            </button>
            <button className="mcq btn" onClick={this.evaluate} id="c">
              {questions[this.state.i].optionC}
            </button>
            <button className="mcq btn" onClick={this.evaluate} id="d">
              {questions[this.state.i].optionD}
            </button>
          </div>
          <div className="controllers">
            <button className="btn prev" onClick={this.prev}>
              Previous
            </button>
            <button className="btn nxt" onClick={this.next}>
              Next
            </button>
            <Link to="/">
              <button className="btn quit" onClick={this.quit}>
                Quit
              </button>
            </Link>
            <Link to="/result">
              <button
                className="btn finish"
                onClick={() => {
                  localStorage.setItem("score", this.state.score);
                  localStorage.setItem("attempted", this.state.attempted);
                }}
              >
                Finish
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
