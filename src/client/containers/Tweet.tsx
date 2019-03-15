import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiHome, FiHash, FiBell, FiMail, FiSearch } from 'react-icons/fi';

const TweetComponent = styledComponents.div`
  width: 600;
  background-color: #151F2A;
`;

const TweetHeaderComponent = styledComponents.div`
  width: 600;
  height: 56;
  background-color: rgb(28, 41, 56);
  border-bottom: 1px solid rgb(56, 68, 77);
`;

const HomeText = styledComponents.div`
  width: 600;
  height: 56;
`;

const SearchComponent = styledComponents.div`
  width: 600;
  padding: 0 20;
  position: relative;
  border-bottom: 1px solid rgb(56, 68, 77);
`;

const InputComponent = styledComponents.input`
  color: #fafafa;
  width: 436;
  height: 34;
  padding: 10;
  margin 10 0;
  background-color: rgb(16, 23, 30);
  border: none;
  border-radius: 100px;
  outline:none;
  font-size: 16px;
  &:focus {
    border: 1px solid #1DA1F1;
    padding-left: 9;
  }
`;

class Tweet extends React.Component {
  render() {
    return (
      <TweetComponent>
        <TweetHeaderComponent>
          <HomeText>Home</HomeText>
        </TweetHeaderComponent>
        <SearchComponent>
          <InputComponent placeholder="What's happening?" />
        </SearchComponent>
      </TweetComponent>
    );
  }
}

const mapStateToProps = (state: any) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
