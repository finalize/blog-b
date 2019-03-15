import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';

const MainComponent = styledComponents.div`
  width: 100%;
  height: 100%;
  background-color: rgb(16, 23, 30);
`;

class Main extends React.Component {
  render() {
    return (
      <MainComponent></MainComponent>
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
