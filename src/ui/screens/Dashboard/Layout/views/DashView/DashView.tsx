import React from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer";
// import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import * as styled from "./DashView.styled";
type Props = {};

export const DashView: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const loc = location.pathname;

  return (
    <>
      <styled.BodyWrapper>
        <Header />
        <styled.MainContainer>
          {loc.includes("operation") && (
            <styled.LeanContainer>
              <styled.Component className="auth_component">
                {children}
              </styled.Component>
            </styled.LeanContainer>
          )}

          {loc.includes("activity") && (
            <styled.AuditContainer>
              <styled.Component className="auth_component">
                {children}
              </styled.Component>
            </styled.AuditContainer>
          )}

          {loc.includes("custodians") && (
            <styled.AuditContainer>
              <styled.Component className="auth_component">
                {children}
              </styled.Component>
            </styled.AuditContainer>
          )}

          {loc.includes("management") && (
            <styled.AuditContainer>
              <styled.Component className="auth_component">
                {children}
              </styled.Component>
            </styled.AuditContainer>
          )}

          {!loc.includes("activity") &&
            !loc.includes("custodians") &&
            !loc.includes("management") &&
            !loc.includes("operation") &&
            !loc.includes("operationdetail") && (
              <>
                <Sidebar />
                {!loc.includes("/client") ? (
                  <styled.ComponentContainer>
                    <styled.Component className="auth_component">
                      {children}
                    </styled.Component>
                  </styled.ComponentContainer>
                ) : (
                  <styled.ClientComponentContainer>
                    <styled.Component className="auth_component">
                      {children}
                    </styled.Component>
                  </styled.ClientComponentContainer>
                )}
              </>
            )}
        </styled.MainContainer>
        <Footer />
      </styled.BodyWrapper>
    </>
  );
};
