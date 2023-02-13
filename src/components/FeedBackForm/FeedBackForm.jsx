import PropTypes from 'prop-types';
import {Section, Header, FeedBackList, FeedBackListItem, FeedBackOption} from './FeedBackForm.styled';

export function Feedback({handleGoodFeed, handleNeutralFeed, handleBadFeed}) {
    return (
        <Section>
            <Header>Please Leave FeedBack</Header>
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
        </Section>
    )
}