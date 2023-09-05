import React from "react";
import { Route, Switch } from "react-router-dom";
import Createclient from "../components/CreateClient/Createclient";
import { ClientDetail } from "../@core/ClientDetail";
import OperationDetail from "../components/OperationDetails/OperationDetail";
import ClientInformation from "../components/ClientInformation/ClientInformation";
import ClientApprovals from "../components/ClientApprovals/ClientApprovals";

export const Client: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/management" component={Createclient} />
      <Route exact path="/client/:id" component={ClientDetail} />
      <Route exact path="/operationdetail" component={OperationDetail} />
      <Route
        exact
        path="/client/clientinformation"
        component={ClientInformation}
      />
      <Route exact path="/client/clientapprovals" component={ClientApprovals} />
    </Switch>
  );
};
