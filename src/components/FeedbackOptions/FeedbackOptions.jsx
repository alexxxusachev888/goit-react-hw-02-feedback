import PropTypes from 'prop-types';
import {FeedBackList, FeedBackListItem, FeedBackOption} from './FeedbackOptions.styled';

export function Feedback({handleGoodFeed, handleNeutralFeed, handleBadFeed}) {
    return (
            <FeedBackList>
                <FeedBackListItem>
                    <FeedBackOption onClick = {()=> handleGoodFeed()}>Good</FeedBackOption>
                    </FeedBackListItem>
                <FeedBackListItem>
                    <FeedBackOption onClick = {()=> handleNeutralFeed()}>Neutral</FeedBackOption>
                    </FeedBackListItem>
                <FeedBackListItem>
                    <FeedBackOption onClick = {()=> handleBadFeed()}>Bad</FeedBackOption>
                    </FeedBackListItem>
            </FeedBackList>
          )
}

Feedback.propTypes = {
    handleGoodFeed: PropTypes.func.isRequired, 
    handleNeutralFeed: PropTypes.func.isRequired,
    handleBadFeed: PropTypes.func.isRequired,
}