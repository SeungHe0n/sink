import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoArrowDown } from 'react-icons/io5';

SearchButton.propTypes = {
  search: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default function SearchButton({ onClick }) {
  return (
    <Button type="submit" onClick={onClick}>
      <IoArrowDown />
    </Button>
  );
}

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  color: white;
  padding: 0 1.6rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #bdc3cc;
  }
`;
