import * as React from 'react';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiHome, FiHash, FiBell, FiMail, FiSearch } from 'react-icons/fi';

const HeaderComponent = styledComponents.div`
  width: 100%;
  height: 54;
  background-color: rgb(28, 41, 56);
  position: fixed;

  @media only screen and (max-width: 1000px) {
    background-color: #ffffff;
  }
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
  padding: 0 20;
  position: relative;
`;

const InputComponent = styledComponents.input`
  color: #fafafa;
  width: 436;
  height: 34;
  padding: 10 10 10 42;
  margin 10 0;
  background-color: rgb(16, 23, 30);
  border: none;
  border-radius: 100px;
  outline:none;
  font-size: 16px;
  &:focus {
    border: 1px solid #1DA1F1;
    padding-left: 41;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderComponent>
        <InnerHeaderComponent>
          <NavComponent>
            <IconContext.Provider value={{ color: '#fafafa', size: '26px' }}>
              <Link to="/"><Icon><FiHome /></Icon></Link>
              <Link to="home"><Icon><FiHash /></Icon></Link>
              <Link to="home"><Icon><FiBell /></Icon></Link>
              <Link to="home"><Icon><FiMail /></Icon></Link>
            </IconContext.Provider>
          </NavComponent>
          <SearchComponent>
            <IconContext.Provider value={{ color: '#ccc', size: '20px' }}>
              <FiSearch style={{ position: 'absolute', top: '18', left: '32' }}/>
            </IconContext.Provider>
            <InputComponent placeholder="Search Twitter" />
          </SearchComponent>
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
