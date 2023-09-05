import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowLeftIcon17,
  DeleteIcon1,
  EditIcon23,
  EmailIcon24,
  UsersManageIcon1,
} from "../../../../../../assets/icons";
import {
  toggleDrawer,
  toggleDrawerSecond,
} from "../../../../../redux/actions/appActions";
import { getOrgGroups } from "../../../../../redux/actions/groupActions";

import * as styled from "./ManageAccess.styled";

export default function ManageAccess() {
  const ref: any = useRef();
  const dispatch = useDispatch();
  const [Data, setData] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const DrawerState = useSelector((state: any) => state.app.drawer);
  const DrawerStateSec = useSelector((state: any) => state.app.drawersecond);

  const toggleOperation = () => {
    dispatch(toggleDrawer(!DrawerState));
    dispatch(toggleDrawerSecond(!DrawerStateSec));
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
        setData(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);
  const Grouplist = [
    {
      id: "1",
      Groupname: "Group 1",
      name: "Hugo, Josh, Marta, Matt…",
      member: "4 Members",
    },
    {
      id: "2",
      Groupname: "Group 2 ",
      name: "Hugo, Josh, Marta, Matt…",
      member: "10 Members",
    },
  ];

  const GrouplistSecond = [
    {
      id: "1",
      name: "Hugo Elliot",
      email1: "hugo@assetreality.io",
    },
    {
      id: "2",
      name: "Group 1",
      button: <EditIcon23 />,
      email1: "harris@assetreality.io",
      email2: "hugo@assetreality.io",
      email3: "marta@assetreality.io",
      email4: "matt@assetreality.io",
    },
    {
      id: "3",
      name: "Group 2",
      button: <EditIcon23 />,
      email1: "harris@assetreality.io",
      email2: "hugo@assetreality.io",
      email3: "marta@assetreality.io",
      email4: "matt@assetreality.io",
    },
  ];

  return (
    <>
      <styled.MainBody>
        <styled.MainTitle>
          <span onClick={toggleOperation}>
            <ArrowLeftIcon17 />
          </span>
          <h2>Access Control</h2>
        </styled.MainTitle>
        <styled.ManageEmail>
          <styled.ManageInput>
            <label>Email</label>
            <div className="d-flex">
              <EmailIcon24 />
              <input type="email" placeholder="Enter your email.." />
            </div>
          </styled.ManageInput>
          <styled.ManageBtn>
            <button>Allow Access</button>
          </styled.ManageBtn>
        </styled.ManageEmail>

        <styled.ManageEmail2>
          <styled.ManageInput>
            <label>Groups</label>
            <div className="d-flex">
              <UsersManageIcon1 />
              <span
                ref={ref}
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              >
                Group
              </span>
              {/* <input type="email" placeholder="Enter your email.." /> */}
            </div>
          </styled.ManageInput>
        </styled.ManageEmail2>
        {isMenuOpen && (
          <styled.TablesBody>
            {Grouplist.map((data: any, i: any) => {
              return (
                <>
                  <styled.TabBody key={i}>
                    <styled.BodyColums1>
                      <div>
                        <h5>{data.Groupname}</h5>
                        <span>{data.name}</span>
                      </div>
                    </styled.BodyColums1>
                    <styled.BodyColums2>
                      <span className="blue">{data.member}</span>
                    </styled.BodyColums2>
                  </styled.TabBody>
                </>
              );
            })}
          </styled.TablesBody>
        )}

        <styled.TablesBody2>
          <styled.TabHead>
            <styled.HeadColums1>Name / Email</styled.HeadColums1>
            <styled.HeadColums3></styled.HeadColums3>
          </styled.TabHead>
          {GrouplistSecond.map((data: any, i: any) => {
            return (
              <>
                <styled.TabBody key={i}>
                  <styled.BodyColumsSec1>
                    <div>
                      <styled.ManageTitle>
                        <h5>{data.name}</h5>
                        <button>{data.button}</button>
                      </styled.ManageTitle>
                      <span>{data.email1}</span>
                      <span>{data.email2}</span>
                      <span>{data.email3}</span>
                      <span>{data.email4}</span>
                    </div>
                  </styled.BodyColumsSec1>
                  <styled.BodyColums3>
                    <button>
                      <DeleteIcon1 />
                    </button>
                  </styled.BodyColums3>
                </styled.TabBody>
              </>
            );
          })}
        </styled.TablesBody2>
        <styled.Modalfooter>
          <button>Done</button>
        </styled.Modalfooter>
      </styled.MainBody>
    </>
  );
}
