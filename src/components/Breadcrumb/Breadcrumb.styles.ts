import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;

  padding: 6px;
  border-radius: 8px;

  margin: 12px 0 24px;

  &,
  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  background: #fafafa;

  & > a,
  svg {
    color: #3c4149;
    fill: #3c4149;
  }

  p {
    font-size: 14px;
  }
`;
