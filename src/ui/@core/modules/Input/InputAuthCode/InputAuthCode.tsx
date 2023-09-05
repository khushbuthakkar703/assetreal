import AuthCode from "react-auth-code-input";

import * as styled from "./InputAuthCode.styled";

export const InputAuthCode: React.FC<any> = ({ onChange, characters = 6 }) => {
  return (
    <styled.BodyWrapper>
      <AuthCode onChange={onChange} characters={characters} />
    </styled.BodyWrapper>
  );
};
