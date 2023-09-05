import React from "react";
import * as styled from "./Allactivity.styled";
import { SearchIcon18 } from "../../../../../assets/icons";

export default function Allactivity() {
  const agents = [
    {
      id: 1,
      name: "Agent 012",
      desc: "Transfered 2.013 BTC into Operation 11234",
      time: "1 week ago",
    },
    {
      id: 2,
      name: "Agent 012",
      desc: "Transfered 2.013 BTC into Operation 11234",
      time: "1 week",
    },
    {
      id: 3,
      name: "Agent 012",
      desc: "Transfered 2.013 BTC into Operation 11234",
      time: "1 week ago",
    },
    {
      id: 4,
      name: "Agent 012",
      desc: "Transfered 2.013 BTC into Operation 11234",
      time: "1 week",
    },
  ];

  const date = new Date().toLocaleString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <styled.ActivityBody>
      <styled.ActivityHead>
        <styled.ActivityTitle>Activity</styled.ActivityTitle>
        <styled.ActivityDesc>{date}</styled.ActivityDesc>
      </styled.ActivityHead>

      <styled.AgentTableHead>
        <styled.inputBox>
          <span>
            <SearchIcon18 />
          </span>
          <input
            type="text"
            placeholder="Search for memebers by name or email"
          />
        </styled.inputBox>
      </styled.AgentTableHead>

      {agents.map((data, i) => {
        return (
          <styled.ActivityRow key={i}>
            <div>
              <styled.AgentName>{data.name} </styled.AgentName>
              <styled.AgentDesc>{data.desc}</styled.AgentDesc>
            </div>
            <styled.AgentTime>{data.time}</styled.AgentTime>
          </styled.ActivityRow>
        );
      })}
    </styled.ActivityBody>
  );
}
