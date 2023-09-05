import React from "react";
import { SearchIcon16, SearchIcon18 } from "../../../../../../../assets/icons";
import MainTable from "../MainTable";
import * as styled from "../Admins/Admins.styled";

export default function Viewers() {
  return (
    <styled.AdminsBody>
      <styled.OperationHeader>
        <styled.searchBar>
          <styled.memberTitle>
            <span>4</span> Members in Viewers
          </styled.memberTitle>
          <styled.memberDesc>
            Admins can have full access to portfolios
          </styled.memberDesc>
        </styled.searchBar>
        <styled.inviteButton>Invite Admins</styled.inviteButton>
      </styled.OperationHeader>

      <styled.inputBox>
        <styled.searchIcon>
          <SearchIcon18 />
        </styled.searchIcon>
        <input type="text" placeholder="Search by operation name " />
      </styled.inputBox>

      <MainTable />
    </styled.AdminsBody>
  );
}
