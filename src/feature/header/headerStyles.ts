import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  height: 3rem;
`;

export const NavElements = styled.div`
  margin-top: 1rem;
`;

export const NavLink = styled.span<{ activePage: boolean }>`
  margin: 0 0.7rem;
  padding: 2px 20px;
  font-size: 19px;
  font-weight: bold;
  text-decorations: none;
  border-radius: 25px;
  background-color: ${(props) => (props.activePage ? '#236a94' : 'none')};
`;
