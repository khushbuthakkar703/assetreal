import React from "react";
import { DownloadIcon18 } from "../../../../../assets/icons";
import * as styled from "./Invoices.styled";

export default function Invoices() {
  const HistoryData = [
    {
      id: "1",
      date: "28 Jan 2022",
      status: "Paid",
      users: "Business (per user)",
    },
    {
      id: "2",
      date: "28 Jan 2022",
      status: "Paid",
      users: "Business (per user)",
    },
    {
      id: "3",
      date: "28 Jan 2022",
      status: "Paid",
      users: "Business (per user)",
    },
    {
      id: "4",
      date: "28 Jan 2022",
      status: "Paid",
      users: "Business (per user)",
    },
    {
      id: "5",
      date: "28 Jan 2022",
      status: "Paid",
      users: "Business (per user)",
    },
    {
      id: "6",
      date: "28 Jan 2022",
      status: "Paid",
      users: "Business (per user)",
    },
  ];

  return (
    <styled.MainBody>
      <styled.MainContainer>
        <styled.MainHeader>
          <h3>Invoice History </h3>
          <span>invoices displayed from asset reality </span>
        </styled.MainHeader>

        <styled.MainUserBody>
          {HistoryData.map((data, i) => {
            return (
              <styled.History_Row key={i}>
                <span>{data.date}</span>
                <span className="Status">{data.status}</span>
                <span>{data.users}</span>
                <button className="downloadbtn">
                  <DownloadIcon18 />
                </button>
              </styled.History_Row>
            );
          })}
        </styled.MainUserBody>
      </styled.MainContainer>
    </styled.MainBody>
  );
}
