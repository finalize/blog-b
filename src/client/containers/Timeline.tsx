import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiImage, FiInstagram, FiTwitter } from 'react-icons/fi';

import {
  tweet,
} from '../actions/timeline';

const TimelineComponent = styledComponents.div`
  width: 600;
  background-color: #151F2A;
`;

const TweetHeaderComponent = styledComponents.div`
  width: 600;
  height: 56;
  background-color: rgb(28, 41, 56);
  border-bottom: 1px solid rgb(56, 68, 77);
  padding: 16;
`;

const HomeText = styledComponents.div`
  font-size: 20px;
  color: #fafafa;
`;

const OuterInputComponent = styledComponents.div`
  width: 600;
  height: 72;
  padding: 16;
  position: relative;
  border-bottom: 1px solid rgb(56, 68, 77);
  display: flex;
`;

const InputComponent = styledComponents.input`
  color: #fafafa;
  width: 436;
  height: 40;
  margin-right: 16;
  padding: 10 10 10 16;
  background-color: rgb(16, 23, 30);
  border: none;
  border-radius: 100px;
  outline:none;
  font-size: 16px;
  &:focus {
    border: 1px solid #1DA1F1;
    padding-left: 15;
  }
`;

const IconComponent = styledComponents.div`
  display: flex;
  height: 40;
  padding: 8;
`;

interface PropTypes {
  tweet: () => void;
}

class Timeline extends React.Component<PropTypes, {}> {
  render() {
    return (
      <TimelineComponent>
        <TweetHeaderComponent>
          <HomeText>Home</HomeText>
        </TweetHeaderComponent>
        <OuterInputComponent>
          <InputComponent placeholder="What's happening?" />
          <IconContext.Provider value={{ color: 'rgba(29,161,242,1.00)', size: '26px' }}>
            <IconComponent><FiImage /></IconComponent>
            <IconComponent><FiInstagram /></IconComponent>
            <IconComponent><FiTwitter onClick={() => this.props.tweet()}/></IconComponent>
          </IconContext.Provider>
        </OuterInputComponent>
      </TimelineComponent>
    );
  }
}

const mapStateToProps = (state: any) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch: any) => ({
  tweet: () => dispatch(tweet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
