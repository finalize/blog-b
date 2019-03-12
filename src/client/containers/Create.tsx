import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';
import * as ReactMarkdown from 'react-markdown';

import SideBar from './SideBar';

const CreateComponent = styledComponents.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MarkdownComponent = styledComponents.div`
  width: 50%;
  height: 100%;
  border-right: 1px solid #ccc;
`;

const PreviewComponent = styledComponents.div`
  width: 50%;
  height: 100%;
`;
const TextareaComponent = styledComponents.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  padding: 8;
  font-size: 18;
`;

class Header extends React.Component {
  state = {
    value: 'a',
  };

  onChange = (e: any) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <CreateComponent>
        <SideBar />
        <MarkdownComponent>
          <TextareaComponent onChange={ this.onChange } />
        </MarkdownComponent>
        <PreviewComponent><ReactMarkdown source={this.state.value} /></PreviewComponent>>
      </CreateComponent>
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
