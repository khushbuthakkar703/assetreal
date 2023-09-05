import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import {
  AppRoutes,
  DashboardRoutes,
  UsersRoutes,
  AuditRoutes,
  ClientRoutes,
  CustodiansRoutes,
} from "../routes";

import { AuthRoute, RedirectSwitch } from "../components";
import * as Auth from "../../screens/auth";
import * as Dash from "../../screens/Dashboard";

export const RouterView: React.VFC = () => {
  return (
    <BrowserRouter>
      <RedirectSwitch>
        {/* Dashboard */}
        <AuthRoute path={DashboardRoutes}>
          <Dash.DashRouteLayout>
            <RedirectSwitch>
              <Route
                path={AppRoutes.Dashboard.Index}
                component={Dash.Operations}
              />
              <Route
                path={AppRoutes.Dashboard.Operation}
                component={Dash.Portfolio}
              />
            </RedirectSwitch>
          </Dash.DashRouteLayout>
        </AuthRoute>
        {/* Organization */}
        <AuthRoute path={UsersRoutes}>
          <Dash.DashRouteLayout>
            <RedirectSwitch>
              <Route path={AppRoutes.Users.Users} component={Dash.Users} />
              <Route path={AppRoutes.Users.Email} component={Dash.Users} />
              <Route path={AppRoutes.Users.invoices} component={Dash.Users} />
              <Route path={AppRoutes.Users.Groups} component={Dash.Users} />
            </RedirectSwitch>
          </Dash.DashRouteLayout>
        </AuthRoute>
        {/* Audits */}
        <AuthRoute path={AuditRoutes}>
          <Dash.DashRouteLayout>
            <RedirectSwitch>
              <Route
                path={AppRoutes.Audits.Activity}
                component={Dash.Activity}
              />
            </RedirectSwitch>
          </Dash.DashRouteLayout>
        </AuthRoute>

        <AuthRoute path={CustodiansRoutes}>
          <Dash.DashRouteLayout>
            <RedirectSwitch>
              <Route
                path={AppRoutes.Custodians.Custodians}
                component={Dash.Custodians}
              />
            </RedirectSwitch>
          </Dash.DashRouteLayout>
        </AuthRoute>

        <AuthRoute path={ClientRoutes}>
          <Dash.DashRouteLayout>
            <RedirectSwitch>
              <Route
                path={AppRoutes.Client.ClientInfo}
                component={Dash.Client}
              />
              <Route
                path={AppRoutes.Client.ClientManagement}
                component={Dash.Client}
              />
              <Route
                path={AppRoutes.Client.ClientPage}
                component={Dash.Client}
              />
              <Route
                path={AppRoutes.Client.Information}
                component={Dash.Client}
              />
              <Route
                path={AppRoutes.Client.Approvals}
                component={Dash.Client}
              />
            </RedirectSwitch>
          </Dash.DashRouteLayout>
        </AuthRoute>
        <Route>
          <Auth.AuthRouteLayout>
            <RedirectSwitch>
              <Redirect exact from="/" to={AppRoutes.Auth.SignIn} />
              <Route path={AppRoutes.Auth.SignIn} component={Auth.SignIn} />
              <Route path={AppRoutes.Auth.SignUp} component={Auth.SignUp} />
              <Route
                path={AppRoutes.Auth.TwoFactor}
                component={Auth.TwoFactor}
              />
              <Route
                path={AppRoutes.Auth.TwoFactorSuccess}
                component={Auth.TwoFactorSuccess}
              />
              <Route
                path={AppRoutes.Auth.Recover}
                component={Auth.RecoverAccount}
              />
            </RedirectSwitch>
          </Auth.AuthRouteLayout>
        </Route>
      </RedirectSwitch>
    </BrowserRouter>
  );
};
