import { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handleNeutralClick = this.handleNeutralClick.bind(this);
    this.handleBadClick = this.handleBadClick.bind(this);
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleGoodClick() {
    this.setState(({ good }) => ({ good: good += 1 }));
  }

  handleNeutralClick() {
    this.setState(({ neutral }) => ({ neutral: neutral += 1 }));
  }

  handleBadClick() {
    this.setState(({ bad }) => ({ bad: bad += 1 }));
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() ? `${this.state.good / this.countTotalFeedback() * 100}%` : '-';
  }

  render() {
    return (
      <>
        <h1>Please, give feedback</h1>
        <div>
          <button onClick={this.handleGoodClick}>Good</button>
          <button onClick={this.handleNeutralClick}>Neutral</button>
          <button onClick={this.handleBadClick}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>Good: {this.state.good}</div>
        <div>Neutral: {this.state.neutral}</div>
        <div>Bad: {this.state.bad}</div>
        <div>Total: {this.countTotalFeedback()}</div>
        <div>Positive Feedback: {this.countPositiveFeedbackPercentage()}</div>
      </>
    )
  }
};