import React, { useState } from "react";
import { MenuIcon } from "../../../../../../assets/icons";
import * as styled from "./GroupTable.styled";

export default function GroupTable() {
  const Grouplist = [
    {
      id: "1",
      name: "Hugo Elliot",
      email: "hugo@assetreality.io",
      status: "Admin",
      assigned: "Nov 12 2022",
    },
    {
      id: "2",
      name: "Harris Graham",
      email: "harris@assetreality.io",
      status: "User",
      assigned: "Nov 12 2022",
    },
    {
      id: "3",
      name: "Marta Jones",
      email: "marta@assetreality.io",
      status: "Admin",
      assigned: "Nov 12 2022",
    },
    {
      id: "4",
      name: "Matthew Grey",
      email: "matt@assetreality.io",
      status: "User",
      assigned: "Nov 12 2022",
    },
  ];

  return (
    <styled.TablesBody>
      <styled.TabHead>
        <styled.HeadColums1>Name / Email</styled.HeadColums1>
        <styled.HeadColums2>Role assigned </styled.HeadColums2>
        <styled.HeadColums2>Date assigned</styled.HeadColums2>
        <styled.HeadColums3></styled.HeadColums3>
      </styled.TabHead>
      {Grouplist.map((data: any, i: any) => {
        return (
          <>
            <styled.TabBody key={i}>
              <styled.BodyColums1>
                <div>
                  <h5>{data.name}</h5>
                  <span>{data.email}</span>
                </div>
              </styled.BodyColums1>
              <styled.BodyColums2>
                <span className="blue">{data.status}</span>
              </styled.BodyColums2>
              <styled.BodyColums2>
                <span>{data.assigned}</span>
              </styled.BodyColums2>
              <styled.BodyColums3>
                <button>
                  <MenuIcon />
                </button>
              </styled.BodyColums3>
            </styled.TabBody>
          </>
        );
      })}

    </styled.TablesBody>
  );
}
