import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';

import Tweet from './Tweet';

const MainComponent = styledComponents.div`
  width: 100%;
  height: 100%;
  background-color: rgb(16, 23, 30);
  padding-top: 62;
`;

const InnerMainComponent = styledComponents.div`
  width: 980;
  height: 100%;
  margin: 0 auto;
`;

class Main extends React.Component {
  render() {
    return (
      <MainComponent>
        <InnerMainComponent>
          <Tweet></Tweet>
        </InnerMainComponent>
      </MainComponent>
    );
  }
}

const mapStateToProps = (state: any) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
