import styled from 'styled-components';

export const BodyWrapper = styled.div`
  ${({ theme }) => theme.font.h[8]};

  display: flex;
  align-items: center;
  justify-content: center;

	& input:not(:last-child) {
		margin-right: 20px;
    float: left;
	}
	& input {
		width: 60px;
		height: 60px;
    text-align: center;
		border-radius: 10px;
    ${({ theme }) => theme.transition.default};
		border: 1px solid ${({ theme }) => theme.color.border[2]};
    font-weight: 600;
    background: ${({ theme }) => theme.color.background[1]};

    &[data-enpassusermodified='yes'] {
      color:  ${({ theme }) => theme.color.main[1]};
      border: 1px solid ${({ theme }) => theme.color.main[1]};
    }
	}
  input:focus-within {
    color:  ${({ theme }) => theme.color.additional[1]};
    border: 1px solid ${({ theme }) => theme.color.additional[1]};
  }

  @media only screen and (max-width: 500px) {
    & input {
      width: 52px;
      height: 52px;
    }

    & input:not(:last-child) {
      margin-right: 5px;
    }
  }
`;
