import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiHome, FiHash, FiBell, FiMail } from 'react-icons/fi';

const HeaderComponent = styledComponents.div`
  width: 100%;
  height: 54;
  background-color: rgb(28, 41, 56);
`;

const InnerHeaderComponent = styledComponents.div`
  display: flex;
  width: 980;
  height: 54;
  margin: 0 auto;
`;

const NavComponent = styledComponents.div`
  display: flex;
  width: 360;
  height: 54;
`;

const Icon = styledComponents.div`
  width: 90;
  padding: 13 31;
`;

const SearchComponent = styledComponents.div`
  width: 476;
`;

const InputComponent = styledComponents.input`
  color: #fafafa;
  width: 476;
  height: 31;
  padding: 10;
  margin 12 0;
  background-color: rgb(16, 23, 30);
  border: none;
  border-radius: 100px;
  outline:none;
  &:focus {
    border: 1px solid #1DA1F1;
    padding-left: 9;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderComponent>
        <InnerHeaderComponent>
          <NavComponent>
            <IconContext.Provider value={{ color: '#fafafa', size: '28px' }}>
              <Link to="/"><Icon><FiHome /></Icon></Link>
              <Link to="home"><Icon><FiHash /></Icon></Link>
              <Link to="home"><Icon><FiBell /></Icon></Link>
              <Link to="home"><Icon><FiMail /></Icon></Link>
            </IconContext.Provider>
          </NavComponent>
          <SearchComponent><InputComponent placeholder="Search Twitter" /></SearchComponent>
        </InnerHeaderComponent>
      </HeaderComponent>
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
