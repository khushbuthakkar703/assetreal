import React, { useState } from "react";
import * as styled from "./OperationDetail.styled";
import { ClientTabData } from "../../components/ClientTabData/ClientTabData";
import ClientDocument from "../../components/ClientDocument/ClientDocument";
import InnerSidebar from "../InnerSidebar/InnerSidebar";
import { useSelector } from "react-redux";

export default function OperationDetail() {
  const op = useSelector((state: any) => state.operations.selectedOp);
  const [Tabs, setTabs] = useState("1");
  return (
    <styled.ClientBody>
      <styled.headerTitle>
        <styled.MainTitle>Case</styled.MainTitle>
        <styled.subTitle>\ {op.operation_name}</styled.subTitle>
      </styled.headerTitle>

      <styled.TabHeader>
        <button
          className={Tabs == "1" ? "activTabs" : ""}
          onClick={() => setTabs("1")}
        >
          Porfolio 1
        </button>
        <button
          className={Tabs == "2" ? "activTabs" : ""}
          onClick={() => setTabs("2")}
        >
          Portfolio 2
        </button>
        <button
          className={Tabs == "3" ? "activTabs" : ""}
          onClick={() => setTabs("3")}
        >
          Portfolio 3
        </button>
      </styled.TabHeader>

      {Tabs == "1" && (
        <>
          <ClientDocument />
          <ClientTabData />
        </>
      )}

      {Tabs == "2" && (
        <>
          <h2>Portfolio 2</h2>
        </>
      )}

      {Tabs == "3" && (
        <>
          <h2>Portfolio 3</h2>
        </>
      )}
    </styled.ClientBody>
  );
}
