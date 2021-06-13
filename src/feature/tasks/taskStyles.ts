import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: block;
  margin: auto;
  width: 80%;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 0.5rem;
  background-color: #c4e7f59e;
`;

export const TaskContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskContainerBody = styled.div`
  display: grid;
  grid-template-columns: auto 9cm;
`;

export const Task = styled.div`
  cursor: default;
  &:hover {
    background-color: rgba(0, 0, 0, 0.19);
    box-shadow: 1px 2px 0px 7px rgb(0 0 0 / 19%);
  }
`;

export const TaskNotFound = styled.div`
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 600;
`;

export const MainTaskArea = styled.div`
  border-right: 2px solid #bbb;
  padding: 16px;
`;

export const TaskSideBar = styled.div``;

export const DateCloseIcon = styled.span`
  color: red;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin: 3px;
`;

