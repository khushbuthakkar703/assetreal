import React, { useState } from "react";
import ClientInformation from "../../components/ClientInformation/ClientInformation";
import ClientOperations from "../../components/ClientOperations/ClientOperations";
import * as styled from "./InnerSidebar.styled";

export default function InnerSidebar() {
  const [Tabs, setTabs] = useState("1");

  return (
    <styled.ClientBody>
      <styled.clientDetails>
        <styled.clientBox>
          <div>
            <h3>Client 1</h3>
            <h5>+44959259925</h5>
          </div>
        </styled.clientBox>

        <ul>
          <li>
            <button
              className={Tabs === "1" ? "activTabs" : ""}
              onClick={() => setTabs("1")}
            >
              <span>Operations </span>
              <p>Explore assets and portfolios.</p>
            </button>
          </li>

          <li>
            <button
              className={Tabs === "2" ? "activTabs" : ""}
              onClick={() => setTabs("2")}
            >
              <span>Information </span>
              <p>Explore your clients details</p>
            </button>
          </li>

          <li>
            <button
              className={Tabs === "3" ? "activTabs" : ""}
              onClick={() => setTabs("3")}
            >
              <span>Approvals </span>
              <p>Approve / Decline requests </p>
            </button>
          </li>
        </ul>
      </styled.clientDetails>
    </styled.ClientBody>
  );
}
