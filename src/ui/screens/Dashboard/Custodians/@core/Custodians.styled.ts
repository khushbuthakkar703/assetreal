import styled from "styled-components";

export const container = styled.div`
  text-align: center;
  width: 100%;
  margin: 1.5rem 0;
  h2 {
    display: block;
    font-weight: 700;
    font-size: 21px;
    line-height: 25px;
    color: #000000;
  }

  h3 {
    display: block;
    font-weight: 100;
    font-size: 18px;
    line-height: 21px;
    color: #2f2f2f;
  }
`;

export const offerBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 1rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const offers = styled.div`
  width: 30%;
  margin: 10px 0;
  min-width: 300px;
  min-height: 600px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  position: relative;
`;

export const selectedCard = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 5px 15px;
  background: linear-gradient(180deg, #3870f6 1.89%, #2465e8 100%);
  color: #fff;
  font-size: 14px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const cardHeader = styled.div`
  padding: 70px 50px 10px;
  text-align: center;
  img {
    width: 100%;
    height: 90px;
    object-fit: contain;
  }
  @media only screen and (max-width: 500px) {
    padding: 50px 20px 10px;
    img {
      height: auto;
    }
  }
`;

export const cardBody = styled.div`
  padding: 10px 50px;
  @media only screen and (max-width: 500px) {
    padding: 10px 20px;
  }
`;

export const cardRow = styled.div`
  margin: 1rem 0;
  h3 {
    font-weight: 100;
    font-size: 24px;
    line-height: 28px;
    color: #2f2f2f;
    display: block;
    margin: 0 0 10px 0;
  }
  h2,
  h6 {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #2f2f2f;
    img {
      height: 32px;
      width: 32px;
      border-radius: 100px;
      margin-right: 5px;
    }
  }

  h6 {
    font-weight: 100;
    font-size: 18px;
    line-height: 21px;
    color: #2f2f2f;
    img {
      height: 25px;
      width: 25px;
    }
  }

  button {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin: 0.7rem 0;
    color: #346df3;
  }
`;

export const cardFooter = styled.div`
  padding: 10px 50px 30px;
  text-align: center;
  button {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #346df3;
  }
`;

export const moreQue = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 35px;
  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }

  h2 {
    display: block;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    b {
      display: block;
    }
  }
`;
