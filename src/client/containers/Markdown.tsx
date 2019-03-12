import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';

class Header extends React.Component {
  render() {
    return (
      <div>Mark</div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
