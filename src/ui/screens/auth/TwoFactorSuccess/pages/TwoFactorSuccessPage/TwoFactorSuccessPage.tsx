import { useLocale } from "../../../../../../assets/locale";

import { MainButton } from "../../../../../@core/modules/Button";
import { TwoFactorSuccessImage } from "../../../../../../assets/images";

import * as globalStyled from "../../../@core/components";
import * as styled from "./TwoFactorSuccessPage.styled";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppRoutes } from "../../../../../app/routes";
import { useHistory } from "react-router-dom";

export const TwoFactorSuccessPage: React.VFC = () => {
  const { word } = useLocale();
  const history = useHistory();
  const auth = useSelector((state: any) => state.auth);

  setTimeout(function () {
    if (auth.is2FAuthenticated && auth.userId) {
      history.push(AppRoutes.Dashboard.Index, { from: "twofactorSuccess" });
    }
  }, 3000);

  return (
    <globalStyled.BodyWrapper>
      <globalStyled.MainBlock width={472} height={635}>
        <styled.Image src={TwoFactorSuccessImage} />
        <globalStyled.Name children={word("auth.two-factor")} />
        <styled.SuccessText children={word("auth.valid")} />
        <styled.SignInContainer>
          <MainButton
            children={word("sign-in.go-dashboard")}
            onClick={null}
            height={52}
            type="secondary"
          />
        </styled.SignInContainer>
      </globalStyled.MainBlock>
    </globalStyled.BodyWrapper>
  );
};
