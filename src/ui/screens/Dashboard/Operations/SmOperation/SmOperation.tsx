import { useState } from "react";
import * as styled from "./SmOperation.styled";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import {
  NumberAssets,
  PlusIcon21,
  PortfoliosNumberIcon,
  SearchIcon18,
  TotalHoldingsIcon,
} from "../../../../../assets/icons";
import AddOperation from "../Components/AddOperation";
import { useDispatch, useSelector } from "react-redux";
import { useLocale } from "../../../../../assets/locale";
import { toggleDrawer } from "../../../../redux/actions/appActions";
import { Link } from "react-router-dom";
import { selectOperation } from "../../../../redux/actions/operationActions";
import date from "../../../../../assets/images/date.png";

export default function SmOperation(props: any) {
  const operations = useSelector((state: any) => state.operations.operations);
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);

  const [addOparation, setaddOparation] = useState(false);
  const toggleOparation = () => {
    setaddOparation((prevState) => !prevState);
  };

  const DrawerState = useSelector((state: any) => state.app.drawer);
  const toggleOperation = () => {
    dispatch(toggleDrawer(!DrawerState));
  };

  const { word } = useLocale();

  const PoolSteps = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <styled.MainBody>
      <styled.MainContainer>
        <div className="OperationSmHeader">
          <div className="searchBar">
            <h4>Operations</h4>
            <select>
              <option value="0">Short by</option>
              <option value="1">Z to A</option>
              <option value="2">A to Z</option>
            </select>
            <button onClick={toggleOperation}>
              <PlusIcon21 />
            </button>
          </div>

          <div className="inputBox">
            {/* <span>
              <SearchIcon18 />
            </span> */}
            <input type="text" placeholder="Type to search" />
          </div>
        </div>
        <styled.Main>
          {operations &&
            operations
              .map((data: any, i: any) => {
                return (
                  <>
                    <styled.graphRight>
                      <styled.rightHeader>
                        <div className="MainImg">
                          <h4>{data.operation_name} </h4>
                          <span>Active</span>
                        </div>
                        <div className="MainDate">
                          <h6>11 Jan 2021</h6>
                          <img src={date} alt="date" />
                        </div>
                      </styled.rightHeader>

                      <styled.rightBody>
                        <div className="graphList">
                          <span>
                            <TotalHoldingsIcon />
                            Total Value
                          </span>
                          <h5>£{data.valueNumber}</h5>
                        </div>
                        <div className="graphList">
                          <span>
                            <PortfoliosNumberIcon />
                            Number of portfolios
                          </span>
                          <h5>{data.portfolio_count}</h5>
                        </div>
                        <div className="graphList">
                          <span>
                            <NumberAssets />
                            Number of assets
                          </span>
                          <h5>{data.asset_count}</h5>
                        </div>
                      </styled.rightBody>

                      <styled.rightFooter>
                        <button>
                          <Link
                            to={`/operation/${data.operation_id}`}
                            onClick={() => dispatch(selectOperation(data))}
                          >
                            Inspect
                          </Link>
                        </button>
                      </styled.rightFooter>
                    </styled.graphRight>
                    <styled.graphRight>
                      <styled.rightHeader>
                        <div className="MainImg">
                          <h4>{data.operation_name} </h4>
                          <span className="terminated">Terminated</span>
                        </div>
                        <div className="MainDate">
                          <h6>11 Jan 2021</h6>
                          <img src={date} alt="date" />
                        </div>
                      </styled.rightHeader>

                      <styled.rightBody>
                        <div className="graphList">
                          <span>
                            <TotalHoldingsIcon />
                            Total Value
                          </span>
                          <h5>£{data.valueNumber}</h5>
                        </div>
                        <div className="graphList">
                          <span>
                            <PortfoliosNumberIcon />
                            Number of portfolios
                          </span>
                          <h5>{data.portfolio_count}</h5>
                        </div>
                        <div className="graphList">
                          <span>
                            <NumberAssets />
                            Number of assets
                          </span>
                          <h5>{data.asset_count}</h5>
                        </div>
                      </styled.rightBody>

                      <styled.rightFooter>
                        <button>
                          <Link
                            to={`/operation/${data.operation_id}`}
                            onClick={() => dispatch(selectOperation(data))}
                          >
                            Inspect
                          </Link>
                        </button>
                      </styled.rightFooter>
                    </styled.graphRight>
                  </>
                );
              })
              .reverse()}
        </styled.Main>

        <Drawer
          open={addOparation}
          onClose={toggleOparation}
          direction="right"
          style={{
            maxWidth: "900px",
            width: "100%",
            padding: "2rem",
          }}
        >
          <styled.Maintitle>
            {step > 1 ? (
              <div className="arrowDown" onClick={() => setStep(step - 1)}>
                <img src="images/arrowDown.svg" alt="" />
              </div>
            ) : (
              <div className="arrowDown" onClick={toggleOparation}>
                <img src="images/arrowDown.svg" alt="" />
              </div>
            )}
            <h2> {step === 1 ? "Add Porfolio " : "Add Asset"}</h2>
          </styled.Maintitle>

          {step === 1 && <AddOperation />}
          <styled.Modalfooter>
            <styled.SmButtons>
              <button onClick={PoolSteps}>
                {" "}
                {step === 3 ? "Done" : "Continue"}
              </button>
              <button onClick={toggleOparation}>Cancel</button>
            </styled.SmButtons>
          </styled.Modalfooter>
        </Drawer>
      </styled.MainContainer>
    </styled.MainBody>
  );
}
