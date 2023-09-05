import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  display        : flex;
  height         : 100vh;
  align-items    : center;
  justify-content: center;
  background: ${({ theme }) => theme.color.greyscale[1]};
`;
