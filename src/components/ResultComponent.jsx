import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ResultComponent extends Component {
  getResult = () => {
    return {
      score: localStorage.getItem("score"),
      attempted: localStorage.getItem("attempted"),
    };
  };
  result = this.getResult();
  render() {
    return (
      <div className="container resultComp">
        <h1>Result {this.score}</h1>
        <div className="mainBox result">
          <h3 className="msg">
            {this.result.score <= 10
              ? "You need more practice!"
              : "You performed excellent!"}
          </h3>
          <h1 className="score">
            Your score is {Math.floor((this.result.score * 100) / 15)}%
          </h1>
          <div className="resultDetails">
            <div className="scoreRow">
              <div className="legend">Total number of questions</div>
              <div className="detailedScore">15</div>
            </div>
            <div className="scoreRow">
              <div className="legend">Number of attempted questions</div>
              <div className="detailedScore">{this.result.attempted}</div>
            </div>
            <div className="scoreRow">
              <div className="legend">Number of correct answers</div>
              <div className="detailedScore">{this.result.score}</div>
            </div>
            <div className="scoreRow">
              <div className="legend">Nmber of wrong answers</div>
              <div className="detailedScore">
                {this.result.attempted - this.result.score}
              </div>
            </div>
          </div>
        </div>
        <div className="endBtns">
          <Link to="/quiz">
            <button className="endBtn playAgain">Play Again</button>
          </Link>
          <Link to="/">
            <button className="endBtn backToHome">Back to home</button>
          </Link>
        </div>
      </div>
    );
  }
}
