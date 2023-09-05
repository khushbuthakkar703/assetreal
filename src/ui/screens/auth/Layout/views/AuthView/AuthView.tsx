// import { NavBar } from '../../sections/NavBar';
// import { Notifications } from '../../../../notifications';
import { Header } from "../../components/Header";
import * as styled from "./AuthView.styled";

type Props = {};

export const AuthView: React.FC<Props> = ({ children }) => {
  return (
    <styled.BodyWrapper>
      <Header />
      <styled.MainContainer>
        <styled.ComponentContainer>
          <styled.Component className="auth_component">
            {children}
          </styled.Component>
        </styled.ComponentContainer>
      </styled.MainContainer>
    </styled.BodyWrapper>
  );
};
