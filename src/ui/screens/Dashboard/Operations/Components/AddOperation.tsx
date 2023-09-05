import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../../../redux/actions/appActions";
import { PlusIcon20 } from "../../../../../assets/icons";
import { createNewOperation } from "../../../../redux/actions/operationActions";
import * as styled from "./index";

export default function AddOperation() {
  const [OperationValue, SetOperationValue] = useState<any>("");
  

  const DrawerState = useSelector((state: any) => state.app.drawer);
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const handleDone = (e: any) => {
    e.preventDefault();
    if (OperationValue !== "") {
      dispatch(toggleDrawer(!DrawerState));
      dispatch(
        createNewOperation({ name: OperationValue, organization_id: auth.org })
      );
      createNewOperation({ name: OperationValue, organization_id: auth.org });
    }
  };

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      handleDone(e);
    }
  };

  return (
    <form>
      <styled.MainBody>
        <div className="MainBody">
          <styled.MainBox>
            <span className="boxTitle">Operation name</span>
            <input
              type="text"
              placeholder="Operation name"
              value={OperationValue}
              onKeyPress={handleKeypress}
              onChange={(e) => {
                SetOperationValue(e.target.value);
              }}
            />
          </styled.MainBox>
          <styled.MainBox>
            <span className="boxTitle">Porfolio </span>
            <button className="addportbtn">
              <PlusIcon20 />
              Add portfolio
            </button>
          </styled.MainBox>
          <styled.Modalfooter>
            <button type="submit" onClick={handleDone}>
              Done
            </button>
          </styled.Modalfooter>
        </div>
      </styled.MainBody>
    </form>
  );
}
