import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
`;

export const ListItem = styled.li`
display: flex;
  justify-content: space-between;
  align-items: center;
  color: midnightblue;

  &>button {
    padding: 3px;
    background-color: inherit;
    color: white;
    background-color: #0a49f5;
    border-color: inherit;
    border-radius: 6px;
    margin-left: 8px;
  }
`;

export const ListSpan = styled.span`
  margin-right: 7px
`;