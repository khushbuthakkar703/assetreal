import { useLocale } from "../../../../../../assets/locale";

import { Link, useHistory, useLocation } from "react-router-dom";
import { MainButton } from "../../../../../@core/modules/Button";
import {
  QrCodeDarkImage,
  TwoFactorImage,
} from "../../../../../../assets/images";

import * as globalStyled from "../../../@core/components";
import * as styled from "./TwoFactorPage.styled";
import * as React from "react";
import { InputAuthCode } from "../../../../../@core/modules/Input/InputAuthCode";
import { AppRoutes } from "../../../../../app/routes";
import { useSelector, useDispatch } from "react-redux";
import { confirm2FA } from "../../../../../redux/actions/authActions";
// import { setErrorMessage } from "../../../../../redux/actions/errorActions";
// import { LeftContainer } from "../../../../Dashboard/Activity/@core/Activity.styled";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

type PassProps = {
  from: string;
};

export const TwoFactorPage: React.VFC = () => {
  const { word } = useLocale();
  const history = useHistory();
  const { state } = useLocation();
  const dispatch = useDispatch();

  const isDark = useSelector((state: any) => state.app.isDark);
  const auth = useSelector((state: any) => state.auth);
  const QRvalue = useSelector((state: any) => state.auth.qrCode);

  let Qr_Image: any = localStorage.getItem("Qrcode");
  const [code, setCode] = React.useState<any>("");

  const propsData = state as PassProps;

  // const signIn = React.useCallback(
  //   () => push(AppRoutes.Auth.TwoFactorSuccess),
  //   [push]
  // );

  React.useEffect(() => {
    console.log(auth.twoFactor);
    if (auth.is2FAuthenticated && auth.userId != null) {
      console.log("should redirect");
      history.push(AppRoutes.Dashboard.Index, { from: "twofactor" });
    }
    if (auth.token === null) {
      history.push(AppRoutes.Auth.SignIn, { from: "twofactor" });
    }
  }, [auth, history]);

  React.useEffect(() => {
    if (code.length === 6) {
      dispatch(confirm2FA({ code: code, authToken: auth.token }));
    }
  }, [auth.token, code, dispatch]);

  const handleCode = (res: string) => {
    setCode(res);
  };

  // const validateCode = async () => {
  //   dispatch(setErrorMessage("Enter Missing Digits"));
  //   if (code.length === 6) {
  //   }
  // };

  // create function to handle entered code

  return (
    <globalStyled.BodyWrapper>
      <globalStyled.MainBlock width={472} height={635}>
        <globalStyled.Name children={word("auth.two-factor")} />
        <globalStyled.Description
          children={
            propsData.from === "login"
              ? word("sign-up.two-factor-detail")
              : word("2fa-new")
          }
        />
        {!auth.twoFactor && (
          <>
            <styled.Image src={Qr_Image} />
          </>
        )}
        <InputAuthCode onChange={handleCode} />
        {!auth.twoFactor && (
          <styled.SignInContainer>
            <MainButton
              children={
                propsData.from === "login"
                  ? word("sign-in")
                  : word("global.authenticate")
              }
              // onClick={validateCode}
              height={52}
            />
          </styled.SignInContainer>
        )}
        {auth.loading ? (
          <>
            {" "}
            <Spin indicator={antIcon} />
          </>
        ) : (
          <Link to={""} children={word("auth.need-help")} />
        )}
      </globalStyled.MainBlock>
    </globalStyled.BodyWrapper>
  );
};
