import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchButton from './button/SearchButton';
import { HiSun } from 'react-icons/hi';

Header.propTypes = {
  search: PropTypes.bool,
  onSearch: PropTypes.func,
};

export default function Header({ search, onSearch }) {
  return (
    <Wrap>
      <Logo search={search}>
        <HiSun />
        <h1>SINK</h1>
      </Logo>
      <SearchButton search={search} onSearch={onSearch} />
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ search }) => (search ? '#737080' : '#FFAC33')};

  svg {
    font-size: 2.5rem;
    padding-right: 0.3rem;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
    font-family: 'Jua', sans-serif;
    /* color: ${({ search }) => (search ? '#737080' : '#42526c')}; */
    user-select: none;
  }
`;
