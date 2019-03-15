import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';

import Header from './Header';
import Main from './Main';

const HomeComponent = styledComponents.div`
`;

class Home extends React.Component {
  render() {
    return (
      <HomeComponent>
        <Header />
        <Main />
      </HomeComponent>
    );
  }
}

const mapStateToProps = (state: any) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
