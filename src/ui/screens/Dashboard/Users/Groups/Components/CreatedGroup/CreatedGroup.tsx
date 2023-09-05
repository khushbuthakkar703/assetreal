import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../../../../../redux/actions/appActions";
import { createGroup } from "../../../../../../redux/actions/groupActions";
// import { createNewOperation } from "../../../../redux/actions/operationActions";
import * as styled from "./CreatedGroup.styled";

export default function CreatedGroup() {
  const [GroupValue, SetGroupValue] = useState<any>("");
  

  const DrawerState = useSelector((state: any) => state.app.drawer);
  const auth = useSelector((state: any) => state.auth);
  
  const dispatch = useDispatch();

  const CreateDone = (e: any) => {
    e.preventDefault();
    if (GroupValue !== "") {
      dispatch(toggleDrawer(!DrawerState));
      dispatch(
        createGroup({organization_id: auth.org, name: GroupValue  })
      );
      createGroup({ organization_id: auth.org,name: GroupValue });
    }
  };

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
        CreateDone(e);
    }
  };

  return (
    <form>
      <styled.MainBody>
        <div className="MainBody">
          <styled.MainBox>
            <span className="boxTitle">Enter group name</span>
            <input
              type="text"
              placeholder="group name"
              value={GroupValue}
              onKeyPress={handleKeypress}
              onChange={(e) => {
                SetGroupValue(e.target.value);
              }}
            />
          </styled.MainBox>
          <styled.Modalfooter>
            <button type="submit" onClick={CreateDone}>
              Done
            </button>
          </styled.Modalfooter>
        </div>
      </styled.MainBody>
    </form>
  );
}
