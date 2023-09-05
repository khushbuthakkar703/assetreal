import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DownArrowIconBorder } from "../../../../../../assets/icons";
import { selectOperation } from "../../../../../redux/actions/operationActions";
import ClientOperations from "../ClientOperations/ClientOperations";
import OperationDetail from "../OperationDetails/OperationDetail";
import * as styled from "./Clienttable.styled";

export default function ClientTable(props: any) {
  const operations = useSelector((state: any) => state.operations.operations);
  const dispatch = useDispatch();

  return (
    <>
      <styled.clientTable>
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
              <h6>Total value</h6>
            </styled.TableBox2>

            <styled.TableBox3></styled.TableBox3>
          </styled.TableRow>

          {operations &&
            operations
              .map((data: any, i: any) => {
                return (
                  <>
                    <styled.TableRow>
                      <styled.TableBox1>
                        <h3>{data.operation_name}</h3>
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
                        <h3>£{data.valueNumber}</h3>
                        <span>total holdings </span>
                      </styled.TableBox2>

                      <styled.TableBox3>
                        <button onClick={() => props.handeleinsepct()}>
                          Inspect{" "}
                        </button>
                      </styled.TableBox3>
                    </styled.TableRow>
                  </>
                );
              })
              .reverse()}
        </div>
      </styled.clientTable>
    </>
  );
}
