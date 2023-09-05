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
    height: 145px !important;
    width: 145px !important;
    margin-top: -70px;
  }
`;

export const SuccessText = styled.p`
  ${({ theme }) => theme.font.h[6]};
  color: ${({ theme }) => theme.color.additional[2]};
  text-align: center;
  margin-top: -20px;

  @media only screen and (max-width: 500px) {
    ${({ theme }) => theme.font.h[8]};
  }
`;