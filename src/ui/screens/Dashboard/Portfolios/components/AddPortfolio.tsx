import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CheckIcon21,
  PlusIcon20,
  TrashIcon18,
} from "../../../../../assets/icons";
import { MainButton } from "../../../../@core/modules/Button";
import {
  toggleDrawer,
  toggleDrawerSecond,
} from "../../../../redux/actions/appActions";
import {
  createPortfolio,
  getPortfoliosByOperation,
} from "../../../../redux/actions/portfolioActions";
import * as styled from "../../Operations/Components/index";
export const AddPortfolio: React.VFC = () => {
  const dispatch = useDispatch();
  const DrawerState = useSelector((state: any) => state.app.drawer);
  const op = useSelector((state: any) => state.operations.selectedOp);
  const [Portvalue, SetPortvalue] = useState<any>("");
  const [Portfolios, setPortfolios] = useState<any[]>([]);

  const AddButton = (e: any) => {
    if (!(Portvalue === "")) {
      Portfolios.push(Portvalue);
    }
    SetPortvalue([]);
  };

  const removeButton = (data: any) => {
    const temp = Portfolios.filter((obj) => obj !== data);
    setPortfolios(temp);
  };

  const handleDone = () => {
    if (Portfolios !== []) {
      Portfolios.forEach((data, i) => {
        const obj = {
          name: data,
          operation_id: op.operation_id,
          suspect_name: data,
        };
        dispatch(toggleDrawerSecond(false));
        dispatch(createPortfolio(obj, op.operation_id));
        dispatch(getPortfoliosByOperation(op.operation_id));
      });
    }
    dispatch(toggleDrawerSecond(false));
  };

  return (
    <>
      <styled.MainBody>
        <div className="MainBody" style={{ padding: "0 2.5rem" }}>
          <styled.MainBox>
            <span style={{ marginTop: "35px" }} className="boxTitle">
              Enter Portfolio/Suspect Name
            </span>
            <input
              type="text"
              placeholder="Suspect Name"
              value={Portvalue}
              onChange={(e) => {
                SetPortvalue(e.target.value);
              }}
            ></input>

            <span className="boxTitle">Portfolios</span>
            {Portvalue && (
              <button className="addPortfolio" onClick={AddButton}>
                <PlusIcon20 />
                Add Portfolio
              </button>
            )}
            {Portfolios.map((data, i) => {
              return (
                <div className="addedBox" key={i}>
                  <div>
                    <span>Portfolio name</span>
                    <h5>{data}</h5>
                  </div>
                  <button
                    onClick={() => {
                      removeButton(data);
                    }}
                  >
                    <TrashIcon18 />
                  </button>
                </div>
              );
            }).reverse()}
          </styled.MainBox>
        </div>
      </styled.MainBody>
      <styled.Modalfooter>
        <button onClick={handleDone}>Add Portfolio</button>
      </styled.Modalfooter>
    </>
  );
};
