import React, { useEffect, useState } from "react";
import { SearchIcon18 } from "../../../../../assets/icons";
import * as styled from "./Activity.styled";
import Tick from "../../../../../assets/images/tick.png";
import Calendar from "../Calender/Calendar";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivity,
  filterdata,
} from "../../../../redux/actions/activityAction";
import moment from "moment";
import NoActivity from "../../../../../assets/images/noactivity.png";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Activity: React.VFC = () => {
  const [endpointData, setendpointData] = useState<any>([]);
  const [data, setdata] = useState("");
  // const [meassage, setmassage] = useState("No records available");
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);
  const datalist = useSelector((state: any) => state.activity.operations);
  const filter_data = useSelector((state: any) => state.activity.filter_data);
  const loading = useSelector((state: any) => state.activity.loading);
  const cal_data = useSelector((state: any) => state.activity.calender_data);
  useEffect(() => {
    dispatch(filterdata(endpointData));
  }, [endpointData]);

  const [finaleData, setfinaleData] = useState<any>([]);
  console.log("finaleData",finaleData);
  
  useEffect(() => {
    if (filter_data.length >= 0) {
      const data: any = [];
      for (let i = 0; i < filter_data.length; i++) {
        for (let j = 0; j < datalist.length; j++) {
          if (datalist[j].endpoint.endsWith(filter_data[i])) {
            data.push(datalist[j]);
          } else {
          }
        }
      }
      setfinaleData(data);
    }
  }, [filter_data]);

  const handleChange = (value: any) => {
    let res = [];

    if (endpointData.length == 0) {
      setendpointData([...endpointData, value]);
    } else {
      if (endpointData.includes(value)) {
        const dd = endpointData.filter((data: any) => {
          return data != value;
        });
        setendpointData(dd);
      } else {
        setendpointData([...endpointData, value]);
      }
    }
  };

  const dataend = filter_data?.some((data: any, i: any) => {
    return (
      data === "/deposits" || data === "/withdrawals" || data === "/permissions"
    );
  });

  React.useEffect(() => {
    dispatch(getActivity(auth.org));
  }, [auth.org, dispatch]);
  const agents: any = [
    {
      id: 1,
      name: "Agent 0121211",
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
    {
      id: 5,
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
    <>
      <styled.MainBody>
        <styled.MainContainer>
          <styled.MainCalender>
            {/* <Calendar /> */}
          </styled.MainCalender>          
          <styled.ActivityBody>
            {loading ? (
              <>
                {" "}
                <styled.noActivity>
                  <Spin indicator={antIcon} />
                </styled.noActivity>
              </>
            ) : (
              <>
                {agents.length <= 0 ? (
                  <styled.noActivity>
                    <div>
                      <img src={NoActivity} alt="" />
                      <styled.noActivityTitle>
                        No Activities
                      </styled.noActivityTitle>
                      <styled.noActivityDesc>
                        Try to select at least one of the filters
                      </styled.noActivityDesc>
                    </div>
                  </styled.noActivity>
                ) : (
                  <>
                    <styled.AgentMainTable>
                      <styled.LeftContainer>
                        <styled.ActivityHead>
                          <styled.ActivityTitle>Activity</styled.ActivityTitle>
                          <styled.ActivityDesc>{date}</styled.ActivityDesc>
                        </styled.ActivityHead>

                        {finaleData.length > 0 ? (
                          finaleData.map((data: any, i: any) => {
                            if (!dataend) {
                              return (
                                <styled.ActivityRow key={i}>
                                  <div>
                                    <styled.AgentName>
                                      {data.user_id ? data.user_id.name : ""}
                                    </styled.AgentName>
                                    <styled.AgentDesc>
                                      {data.desc}
                                    </styled.AgentDesc>
                                  </div>
                                  <styled.AgentRole>
                                    <span className="blue">
                                      {data.user_id ? data.user_id.role : ""}
                                    </span>
                                  </styled.AgentRole>
                                  <styled.AgentTime>
                                    {moment(new Date(data.when)).fromNow()}
                                  </styled.AgentTime>
                                </styled.ActivityRow>
                              );
                            }
                          })
                        ) : cal_data.length > 0 ? (
                          cal_data[0].data.map((data: any, i: any) => {
                            if (cal_data[0])
                              return (
                                <styled.ActivityRow key={i}>
                                  <div>
                                    <styled.AgentName>
                                      {data.user_id ? data.user_id.name : ""}
                                    </styled.AgentName>
                                    <styled.AgentDesc>
                                      {data.desc}
                                    </styled.AgentDesc>
                                  </div>
                                  <styled.AgentRole>
                                    <span className="blue">
                                      {data.user_id ? data.user_id.role : ""}
                                    </span>
                                  </styled.AgentRole>
                                  <styled.AgentTime>
                                    {moment(new Date(data.when)).fromNow()}
                                  </styled.AgentTime>
                                </styled.ActivityRow>
                              );
                          })
                        ) : !dataend ? (
                          datalist.map((data: any, i: any) => {
                            return (
                              <styled.ActivityRow key={i}>
                                <div>
                                  <styled.AgentName>
                                    {data.user_id ? data.user_id.name : ""}
                                  </styled.AgentName>
                                  <styled.AgentDesc>
                                    {data.desc}
                                  </styled.AgentDesc>
                                </div>
                                <styled.AgentRole>
                                  <span className="blue">
                                    {data.user_id ? data.user_id.role : ""}
                                  </span>
                                </styled.AgentRole>
                                <styled.AgentTime>
                                  {moment(new Date(data.when)).fromNow()}
                                </styled.AgentTime>
                              </styled.ActivityRow>
                            );
                          })
                        ) : !cal_data === null ? (
                          <h1>No records available day</h1>
                        ) : (
                          <h1>No records available</h1>
                        )}
                      </styled.LeftContainer>

                      <styled.RightContainer>
                        <styled.ActivityTitle>Filters </styled.ActivityTitle>

                        <styled.FiltersBox>
                          <label className="container">
                            Logged In
                            <input
                              type="checkbox"
                              name="languages"
                              value="/authenticate"
                              onChange={(e) => handleChange(e.target.value)}
                            />
                            <span className="checkmark"></span>
                          </label>

                          <label className="container">
                            Operations
                            <input
                              type="checkbox"
                              name="languages"
                              value="/portfolio"
                              onChange={(e) => handleChange(e.target.value)}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="container">
                            Deposits
                            <input
                              type="checkbox"
                              name="languages"
                              value="/deposits"
                              onChange={(e) => handleChange(e.target.value)}
                            />
                            <span className="checkmark"></span>
                          </label>

                          <label className="container">
                            Withdrawals
                            <input
                              type="checkbox"
                              name="languages"
                              value="/withdrawals"
                              onChange={(e) => handleChange(e.target.value)}
                            />
                            <span className="checkmark"></span>
                          </label>

                          <label className="container">
                            Permissions
                            <input
                              type="checkbox"
                              name="languages"
                              value="/permissions"
                              onChange={(e) => handleChange(e.target.value)}
                            />
                            <span className="checkmark"></span>
                          </label>

                          <styled.filterBtn>
                            <button>Select All</button>
                            <button>Clear All</button>
                          </styled.filterBtn>
                        </styled.FiltersBox>
                      </styled.RightContainer>
                    </styled.AgentMainTable>
                  </>
                )}
              </>
            )}
          </styled.ActivityBody>
        </styled.MainContainer>
      </styled.MainBody>
    </>
  );
};
