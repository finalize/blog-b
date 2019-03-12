import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';

import SideBar from './SideBar';

const HomeComponent = styledComponents.div`
  width: 320px;
  height: 100%;
  border-right: 1px solid #ccc;
`;

class Home extends React.Component {
  render() {
    return (
      <HomeComponent>SideBar</HomeComponent>
    );
  }
}

const mapStateToProps = (state: any) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
