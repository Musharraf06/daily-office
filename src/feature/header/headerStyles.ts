import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  height: 3.4rem;
  box-shadow: 0px 1px 7px 0px rgb(0 0 0 / 29%);
}
`;

export const NavLink = styled.a<{ activePage: boolean }>`
  margin: 0 0.7rem;
  padding: 2px 20px;
  font-size: 19px;
  font-weight: bold;
  text-decorations: none;
  border-radius: 25px;
  background-color: ${(props) => (props.activePage ? '#236a94' : '#fff')};
  color: ${(props) => (props.activePage ? '#fff' : '#000')};
`;
