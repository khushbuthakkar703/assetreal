import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon18 } from "../../../../../../assets/icons";
import OperationDetail from "../OperationDetails/OperationDetail";
import * as styled from "./ClientOperations.styled";

export default function ClientOperations() {
  const [GoInspect, setGoInspect] = useState(true);
  console.log("GoInspect",GoInspect);
  
  const clientsdata = [
    {
      name: "Klondike",
      status: "Active",
      portfolios: "05",
      assets: "12",
      totalvalue: "12",
    },
    {
      name: "Klondike",
      status: "Active",
      portfolios: "05",
      assets: "12",
      totalvalue: "12",
    },
    {
      name: "Klondike",
      status: "Active",
      portfolios: "05",
      assets: "12",
      totalvalue: "12",
    },
    {
      name: "Klondike",
      status: "Active",
      portfolios: "05",
      assets: "12",
      totalvalue: "12",
    },
  ];

  return (
    <styled.MainBody>
      {GoInspect ? (
        <div>
          <styled.HeadTitile>Cases</styled.HeadTitile>
          <styled.ClientOperationsHead>
            <styled.searchbar>
              <SearchIcon18 />
              <input type="search" placeholder="Search by case name " />
            </styled.searchbar>

            <select>
              <option value="0">Short by</option>
              <option value="1">Z to A</option>
              <option value="2">A to Z</option>
            </select>
          </styled.ClientOperationsHead>

          <styled.OperationTable>
            <div className="customTable">
              <styled.TableRow
                style={{
                  border: "none",
                  background: "none",
                  marginTop: "15px",
                }}
              >
                <styled.TableBox1>
                  <h6>Case name</h6>
                </styled.TableBox1>

                <styled.TableBox2>
                  <h6>Number of portfolios</h6>
                </styled.TableBox2>

                <styled.TableBox2>
                  <h6>Number of assets</h6>
                </styled.TableBox2>

                <styled.TableBox2>
                  <h6>Total value</h6>
                </styled.TableBox2>

                <styled.TableBox3></styled.TableBox3>
              </styled.TableRow>

              {clientsdata.map((data, i) => {
                return (
                  <styled.TableRow key={i}>
                    <styled.TableBox1>
                      <h3>{data.name}</h3>
                      <span>{data.status}</span>
                    </styled.TableBox1>

                    <styled.TableBox2>
                      <h3>{data.portfolios}</h3>
                      <span>portfolios</span>
                    </styled.TableBox2>

                    <styled.TableBox2>
                      <h3>{data.assets}</h3>
                      <span>assets</span>
                    </styled.TableBox2>

                    <styled.TableBox2>
                      <h3>{data.totalvalue}</h3>
                      <span>total holdings </span>
                    </styled.TableBox2>

                    <styled.TableBox3>
                      <button
                        type="button"
                        onClick={() => setGoInspect(!GoInspect)}
                      >
                        Inspect
                      </button>
                    </styled.TableBox3>
                  </styled.TableRow>
                );
              })}
            </div>
          </styled.OperationTable>
        </div>
      ) : (
        <OperationDetail />
      )}
    </styled.MainBody>
  );
}
