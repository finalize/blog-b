import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';

const Markdown = styledComponents.div`
  width: 960px;
  margin: 0 auto;
  padding: 16px 8px;
`;

class Header extends React.Component {
  render() {
    console.log(Markdown.componentStyle.rules[0] + 'font-size: 32px;');
    return (
      <Markdown contentEditable>Markdown</Markdown>
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
