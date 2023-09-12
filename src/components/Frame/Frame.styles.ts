import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  overflow-y: auto;

  a {
    color: #1e1e1e;
  }
`;

export const Header = styled.header`
  width: 100%;

  padding: 10px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 14px;
  }
`;

export const OptionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  input {
    padding: 8px;
    border-radius: 6px;

    border: 1px solid #f2f2f2;
  }

  input,
  span {
    font-size: 14px;
  }
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column;
  overflow-y: auto;
`;

export const Main = styled.main`
  width: 100%;
  padding: 0 20px;
`;

export const Group = styled.div`
  height: 100%;
  display: flex;
`;

export const Utils = styled.aside`
  width: 340px;
  height: 100%;

  display: flex;
  flex-flow: column;
  gap: 10px;

  padding: 16px;

  label {
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 8px;
    border-radius: 6px;

    border: 1px solid #f2f2f2;
  }

  .teste {
    font-size: 14px;
    padding: 8px;

    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 6px;

    &:hover {
      background: #f9f9f9;
    }
  }

  .teste.active {
    background: #f9f9f9;
  }

  p {
    font-size: 13px;
    margin-bottom: 4px;
    color: #8c8c8c;
  }
`;

export const LinkTo = styled(Link)`
  svg {
    transition: all 0.2s;
  }

  &:hover svg {
    margin-left: 5px;
  }
`;
