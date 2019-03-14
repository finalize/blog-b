import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';
import * as ReactMarkdown from 'react-markdown';

import SideBar from './SideBar';
import Header from './Header';

const CreateComponent = styledComponents.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainComponent = styledComponents.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MarkdownComponent = styledComponents.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const WritingComponent = styledComponents.div`
  width: 50%;
  height: auto;
  border-right: 1px solid #ccc;
  position: absolute;
  top: 60;
  right:0;
  bottom:0;
  left:0;
`;

const PreviewComponent = styledComponents.div`
  width: 50%;
  height: auto;
  position: absolute;
  top: 60;
  right:0;
  bottom:0;
`;

const TextareaComponent = styledComponents.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  padding: 16;
  font-size: 17;
`;

class Create extends React.Component {
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
        <MainComponent>
          <Header />
          <MarkdownComponent>
            <WritingComponent><TextareaComponent onChange={this.onChange}/></WritingComponent>
            <PreviewComponent><ReactMarkdown source={this.state.value}></ReactMarkdown></PreviewComponent>
          </MarkdownComponent>
        </MainComponent>
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

export default connect(mapStateToProps, mapDispatchToProps)(Create);
