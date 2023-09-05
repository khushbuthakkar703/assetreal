import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  margin-top: 30px;

  & > *:first-child {
    flex: 1;
  }

  & > *:last-child {
    min-width: 20px !important;
  }
`;