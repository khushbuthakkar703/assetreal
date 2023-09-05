import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserManage } from "../UserManage/@core/UserManage";
import Email from "./../Email/Email";
import Invoices from "../Invoices/Invoices";
import { GroupManage } from "../Groups/@core/GroupManage";

export const Users: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/users" component={UserManage} />
        <Route path="/email" component={Email} />
        <Route path="/invoices" component={Invoices} />
        <Route path="/groups" component={GroupManage} />
      </Switch>
    </>
  );
};
