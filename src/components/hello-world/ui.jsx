import styled from 'styled-components';

export const Panel = styled.div`
  background: ${({ theme }) => theme.white};
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 20px 10px;
  position: sticky;
  top: 0;
`;
