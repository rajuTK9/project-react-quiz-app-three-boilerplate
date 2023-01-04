import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="container">
        <h2>Quiz App</h2>
        <Link to="/quiz">
          <button className="play btn">Play</button>
        </Link>
      </div>
    );
  }
}
