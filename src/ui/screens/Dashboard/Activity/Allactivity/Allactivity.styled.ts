import styled from "styled-components";

export const ActivityBody = styled.div`
  padding: 0 40px;
`;

export const ActivityHead = styled.div`
  margin: 15px 0;
`;

export const ActivityTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.greyscale[23]};
`;

export const ActivityDesc = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.greyscale[21]};
`;

export const AgentTableHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const inputBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  max-height: 42px;
  width: 100%;
  border: 1px solid #f2f2ff;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.background[3]};
  @media only screen and (max-width: 668px) {
    max-width: 100%;
  }
  span {
    margin-right: 5px;
    padding: 0.5rem 0 0.5rem 1rem;
    display: flex;
  }
  input {
    padding: 0.9rem 0.5rem;
    border: none;
    font-weight: 600;
    font-size: 12px;
    color: ${({ theme }) => theme.color.greyscale[21]};
    width: 100%;
    background: none;
    &::placeholder {
      color: ${({ theme }) => theme.color.greyscale[21]};
    }
    img {
      width: 50%;
    }
  }
`;

export const ActivityRow = styled.div`
  min-height: 72px;
  border: 1px solid #F4F4F4;
  border-radius: 5px;
  margin: 13px 0;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AgentName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.greyscale[24]};
`;

export const AgentDesc = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #8081A5;
`;

export const AgentTime = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.greyscale[24]};
`;