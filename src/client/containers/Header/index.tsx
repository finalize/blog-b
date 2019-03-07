import * as React from 'react';
import { connect } from 'react-redux';

import { helloWorld } from '../../actions/header';

class Header extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return ({
  });
};

const mapDispatchToProps = (dispatch: any) => ({
  helloWorld: () => dispatch(helloWorld()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
