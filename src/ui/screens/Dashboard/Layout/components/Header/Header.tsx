import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoutIcon, UserIcon22 } from "../../../../../../assets/icons";
import { AppLogoImage, HeaderUser } from "../../../../../../assets/images";
import * as styled from "./Header.styled";
type Props = {};
export const Header: React.VFC<Props> = () => {
  const [Open, setOpen] = useState(false);
  const [Sidebar, setSidebar] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const [routeChange, setRouteChange] = useState(false);
  useEffect(() => {}, [routeChange]);
  return (
    <>
      <styled.Container>
        <styled.leftSection>
          <styled.LogoWrapper>
            <styled.Logo src={AppLogoImage} />
            <styled.Name children={"Asset Reality"} />
          </styled.LogoWrapper>
          <styled.menuList>
            <Link to="/dashboard">Cases</Link>
            {path === "/users" ||
            path === "/email" ||
            path === "/invoices" ||
            path === "/groups" ? (
              <Link to="/users">Settings</Link>
            ) : (
              <Link to="/users">Settings</Link>
            )}
            <Link to="/activity">Activity</Link>
            <Link to="/management">Client Management</Link>
          </styled.menuList>
        </styled.leftSection>
        <styled.rightSection>
          <div className="userDp" onClick={() => setSidebar(true)}>
            <img src={HeaderUser} alt="" />
            <h3>Federal Polite </h3>
          </div>
          <button onClick={() => setOpen(true)}>Log out</button>
        </styled.rightSection>
      </styled.Container>
      <styled.smHeader>
        <styled.MiniHeader>
          <styled.Logo src={AppLogoImage} />
          <styled.Name children={"Asset Reality"} />
          {/* {path === "/users" ? (
            <styled.LogoText>Organization</styled.LogoText>
          ) : (
            <styled.LogoText>Dashboard</styled.LogoText>
          )} */}
        </styled.MiniHeader>
        <div className="logOut">
          <button onClick={() => setOpen(true)}>
            <LogoutIcon />
          </button>
          <label className="menu-button-wrapper">
            <input type="checkbox" className="menu-button" />
            <div className="icon-wrapper">
              {/* <img src="images/settingIcon.svg" alt="" className="hamburger" /> */}
              <label className="hamburger" onClick={() => setSidebar(!Sidebar)}>
                <input className="hamburger-input" type="checkbox" />
                <span className="hamburger-line first"></span>
                <span className="hamburger-line second"></span>
                <span className="hamburger-line third"></span>
              </label>
            </div>
            <div className="item-list">
              <div className="userDp">
                <img src={HeaderUser} alt="" />
                <h3>Federal Polite </h3>
              </div>
              <Link to="/dashboard">Cases</Link>
              {path === "/users" ||
              path === "/email" ||
              path === "/invoices" ||
              path === "/groups" ? (
                <Link to="/users">Settings</Link>
              ) : (
                <Link to="/users">Settings</Link>
              )}
              <Link to="/activity">Activity</Link>
              <Link to="/management">Client Management</Link>
            </div>
          </label>
        </div>
      </styled.smHeader>
      {Open && (
        <styled.LogoutModal>
          <styled.ModalBody>
            <span>Are you sure you want to Logout?</span>
            <div className="LogoutButtons">
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                  console.log("window.location.href ", window.location.href);
                }}
              >
                Yes
              </button>
              <button onClick={() => setOpen(false)}>No</button>
            </div>
          </styled.ModalBody>
        </styled.LogoutModal>
      )}
    </>
  );
};
