import React, { Component } from "react";

import { Container } from "App.styled";
import { Section } from './components/Section/Section';
import { Feedback } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleGoodFeed = () => {this.setState(prevState => ({good: prevState.good + 1}))};
  handleNeutralFeed = () => {this.setState(prevState => ({neutral: prevState.neutral + 1}))};
  handleBadFeed = () => {this.setState(prevState => ({bad: prevState.bad + 1}))};
  countTotalFeedback = (gd, ntr, bd) => gd + ntr + bd;
  countPositiveFeedbackPercentage = (total, good) => total ? `${(Math.ceil((good/total) * 100))}%` : `0%`;
 
  render() {
    const {good, neutral, bad} = this.state;
    const totalFeeds = this.countTotalFeedback(good, neutral, bad);
    const positiveFeeds = this.countPositiveFeedbackPercentage(totalFeeds, good);

    return (<Container> 

      <Section title={'Please leave feedback'}>
        <Feedback 
          handleGoodFeed = {this.handleGoodFeed} 
          handleNeutralFeed = {this.handleNeutralFeed}
          handleBadFeed = {this.handleBadFeed}
        /></Section>    
      
      <Section title={'Statistics'}>
        { totalFeeds ? 
        <Statistics 
          good = {good} 
          neutral = {neutral}
          bad= {bad}
          totalFeeds = {totalFeeds}
          positiveFeeds = {positiveFeeds}
        /> :
         <Notification/>}

      </Section>

      </Container>)
  }
};

