import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  p {
    color: #8c8c8c;
    font-size: 14px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 32px 0;

    border: 1px solid #f2f2f2;
    overflow: hidden;
    border-collapse: separate;

    border-radius: 16px;
  }

  td,
  th {
    text-align: left;
    padding: 10px;
  }

  input {
    padding: 8px;
    padding-right: 32px;
    border-radius: 6px;

    border: 1px solid #f2f2f2;
    font-size: 14px;
  }

  svg {
    transition: all 0.2s;
  }

  td:last-child {
    cursor: pointer;
  }

  td:hover svg {
    margin-left: 10px;
  }

  span {
    display: flex;
  }

  td {
    font-size: 14px;
  }

  td:first-child {
    width: 250px;
  }
`;

export const FormSearch = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(186px, 10px));
  grid-template-rows: 1fr;

  padding: 1rem 0;

  gap: 10px;
`;

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
`;
