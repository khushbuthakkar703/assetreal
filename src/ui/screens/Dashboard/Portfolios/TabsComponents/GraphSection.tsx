import React, { useState } from "react";
import * as styled from "./Graph.styled";
import MainGraph from "./MainGraph";
import {
  Onehour,
  Oneday,
  Oneweek,
  Onemonth,
  Threemonth,
  Oneyear,
} from "./Graphdata";
import { useSelector } from "react-redux";

export default function GraphSection() {
  const [Graphdata, setGraphdata] = useState<any>(Onehour);
  const operations = useSelector((state: any) => state.operations);

  return (
    <styled.GraphMain>
      <div className="graphLeft">
        <div className="graphHeader">
          <div className="graphTitle">
            <div className="Titles">
              <h5>Estimated Portfolio Value</h5>
              {/* <h4>Data Unavailable</h4> */}
            </div>
            <h6>Data Unavailable</h6>
          </div>

          <div className="graphTabs">
            <ul>
              <li>
                <button
                  className={Graphdata === Onehour ? "activeTab" : ""}
                  onClick={() => setGraphdata(Onehour)}
                >
                  1H
                </button>
              </li>
              <li>
                <button
                  className={Graphdata === Oneday ? "activeTab" : ""}
                  onClick={() => setGraphdata(Oneday)}
                >
                  24H
                </button>
              </li>
              <li>
                <button
                  className={Graphdata === Oneweek ? "activeTab" : ""}
                  onClick={() => setGraphdata(Oneweek)}
                >
                  1W
                </button>
              </li>
              <li>
                <button
                  className={Graphdata === Onemonth ? "activeTab" : ""}
                  onClick={() => setGraphdata(Onemonth)}
                >
                  1M
                </button>
              </li>
              <li>
                <button
                  className={Graphdata === Threemonth ? "activeTab" : ""}
                  onClick={() => setGraphdata(Threemonth)}
                >
                  3M
                </button>
              </li>
              <li>
                <button
                  className={Graphdata === Oneyear ? "activeTab" : ""}
                  onClick={() => setGraphdata(Oneyear)}
                >
                  1Y
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* <MainGraph Graph={Graphdata} /> */}
      </div>
      <div className="graphRight">
        <div className="rightHeader">
          <h5>Portfolio Statistics</h5>
        </div>

        <div className="rightBody">
          <div className="graphList">
            <span>Number of Portfolios</span>
            <h5>{operations.portfolios.length}</h5>
          </div>
          <div className="graphList">
            <span>Number of Assets</span>
            <h5>{operations.selectedOp.asset_count}</h5>
          </div>
          <div className="graphList">
            <span>Collaborators</span>
            <h5>2</h5>
          </div>
          <div className="graphList">
            <span>Share in Operation</span>
            <h5>Data Unavailable</h5>
          </div>
          <div className="graphList">
            <span>Portfolio Status </span>
            <h5>Active</h5>
          </div>
          <div className="graphList">
            <span>Latest Update</span>
            <h5>
              17:54 <br /> 20/02/2022
            </h5>
          </div>
        </div>

        {/* <div className="rightFooter">
          <button>Export report</button>
        </div> */}
      </div>
    </styled.GraphMain>
  );
}
