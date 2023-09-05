import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 50px;

  & > *:first-child {
    flex: 1;
    margin-right: 5px;
  }

  & > *:last-child {
    min-width: 20px !important;
  }

  @media only screen and (max-width: 500px) {
    margin-top: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

`;

export const Image = styled.img`
  height: 175px !important;
  width: 150px !important;
  margin-bottom: 40px !important;

  @media only screen and (max-width: 500px) {
    height: 115px !important;
    width: 95px !important;
  }
`;