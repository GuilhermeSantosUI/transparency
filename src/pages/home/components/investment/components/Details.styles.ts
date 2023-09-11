import styled from 'styled-components';

export const Container = styled.div`
  width: 70vw;
  height: fit-content;

  padding: 18px;

  display: flex;
  align-items: center;
  gap: 10px;

  background: #ffffff;
  border-radius: 14px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChartIcon = styled.div`
  padding: 6px;

  border-radius: 6px;
  background-color: #306dff;

  display: flex;

  svg {
    fill: #ffffff;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px 0;
`;

export const RevenueDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 0;
`;

export const Details = styled.div`
  padding: 10px;

  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 4px;

  border-radius: 6px;

  border: 1px solid #f2f2f2;

  p {
    font-size: 14px;
    color: #8c8c8c;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;

  p,
  svg {
    fill: #105dfb;
    color: #105dfb;
  }
`;

export const Aside = styled.aside`
  height: 100%;
  min-height: 470px;

  height: max-content;

  display: flex;
  flex-flow: column;
  justify-content: space-between;

  p {
    font-size: 14px;
    color: #8c8c8c;
  }
`;
