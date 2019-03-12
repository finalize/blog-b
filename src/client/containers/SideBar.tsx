import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';

const SideBarComponent = styledComponents.div`
  width: 280px;
  height: 100%;
  border-right: 1px solid #ccc;
`;

const Create = styledComponents.div`
  width: 280;
  height: 60;
  border-bottom: 1px solid #ccc;
`;

class SideBar extends React.Component {
  render() {
    return (
      <SideBarComponent><Link to="create"><Create /></Link></SideBarComponent>
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
