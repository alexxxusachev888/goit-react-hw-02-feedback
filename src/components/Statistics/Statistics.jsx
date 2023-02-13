import PropTypes from 'prop-types';
import { Section, Header, DataList, FeedBackPoint } from './Statistics.styled';

export function Statistics({good, neutral, bad, totalFeeds, positiveFeeds}) {
    return (
        <Section>
        <Header>Please leave feedback</Header>
        <DataList>
          <FeedBackPoint>Good: {good}</FeedBackPoint>
          <FeedBackPoint>Neutral: {neutral}</FeedBackPoint>
          <FeedBackPoint>Bad: {bad}</FeedBackPoint>
          <FeedBackPoint>Total: {totalFeeds}</FeedBackPoint>
          <FeedBackPoint>Positive feedback: {positiveFeeds}</FeedBackPoint>
        </DataList>
      </Section>
    )
}