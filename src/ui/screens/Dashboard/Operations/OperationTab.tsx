import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DownArrowIconBorder } from "../../../../assets/icons";
import * as styled from "./OperationTable";
import { selectOperation } from "../../../redux/actions/operationActions";

export default function OperationTab() {
  const operations = useSelector((state: any) => state.operations.operations);
  const dispatch = useDispatch();

  // const handleActivity = (operation: any) => {
  //   dispatch(selectOperation(operation));
  // };

  return (
    <styled.OperationTable>
      <div className="customTable">
        <styled.TableRow
          style={{ border: "none", background: "none", marginTop: "15px" }}
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
            <h6>Recently added</h6>
          </styled.TableBox2>

          <styled.TableBox2>
            <h6>Total value</h6>
          </styled.TableBox2>

          <styled.TableBox2></styled.TableBox2>

          <styled.TableBox3>
            <select>
              <option value="">Sort by</option>
              <option value="0">A to Z</option>
              <option value="1">Z to A</option>
            </select>
          </styled.TableBox3>
        </styled.TableRow>

        {operations &&
          operations
            .map((data: any, i: any) => {
              return (
                <>
                  <styled.TableRow>
                    <styled.TableBox1>
                      <Link to={`/operation/${data.operation_id}`}>
                        {data.operation_name}
                      </Link>
                      <span>Active</span>
                    </styled.TableBox1>

                    <styled.TableBox2>
                      <h3>{data.portfolio_count}</h3>
                      <span>portfolios</span>
                    </styled.TableBox2>

                    <styled.TableBox2>
                      <h3>{data.asset_count}</h3>
                      <span>assets</span>
                    </styled.TableBox2>

                    <styled.TableBox2>
                      <h3 className="up_value">£{data.recentlyNumber}</h3>
                      <span>recently added </span>
                    </styled.TableBox2>

                    <styled.TableBox2>
                      <h3>£{data.valueNumber}</h3>
                      <span>total holdings </span>
                    </styled.TableBox2>

                    <styled.TableBox2>
                      <button>
                        <Link
                          to={`/operation/${data.operation_id}`}
                          onClick={() => dispatch(selectOperation(data))}
                        >
                          Inspect
                        </Link>
                      </button>
                    </styled.TableBox2>
                    {/* 
                    <styled.TableBox3 key={i}>
                      <button>
                        <DownArrowIconBorder />
                      </button>
                    </styled.TableBox3> */}
                  </styled.TableRow>
                </>
              );
            })
            .reverse()}
      </div>
    </styled.OperationTable>
  );
}
