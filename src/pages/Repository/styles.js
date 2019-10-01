import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${rotate} 2s linear infinite;
`;
