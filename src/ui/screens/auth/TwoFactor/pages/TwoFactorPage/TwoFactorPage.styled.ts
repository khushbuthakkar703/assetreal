import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  margin-top: 50px;

  & > *:first-child {
    flex: 1;
    margin-right: 5px;
  }

  & > *:last-child {
    min-width: 20px !important;
  }
`;

export const Image = styled.img`
  height: 185px !important;
  width: 185px !important;
  margin-bottom: 40px !important;

  @media only screen and (max-width: 500px) {
    height: 115px !important;
    width: 115px !important;
  }
`;