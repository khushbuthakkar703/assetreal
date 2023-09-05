import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowLeftIcon17,
  DeleteIcon,
  EditIcon22,
  EmailIcon24,
} from "../../../../../../../assets/icons";
import { toggleDrawer } from "../../../../../../redux/actions/appActions";
import { addToGroup } from "../../../../../../redux/actions/groupActions";
import * as styled from "./CreateGroup.styled";

export default function CreateGroup() {
  const [Email, setEmail] = useState("");
  const dispatch = useDispatch();
  const DrawerState = useSelector((state: any) => state.app.drawer);
  const Groupsdata = useSelector((state: any) => state.groups.group_data);
  const Userdata = useSelector((state: any) => state.perms.users);
   console.log("Userdata",Userdata[0].id);
   
  const toggleOperation = () => {
    dispatch(toggleDrawer(!DrawerState));
  };
  const Grouplist = [
    {
      id: "1",
      name: "Hugo Elliot",
      email: "hugo@assetreality.io",
      status: "Admin",
    },
    {
      id: "2",
      name: "Harris Graham",
      email: "harris@assetreality.io",
      status: "User",
    },
    {
      id: "3",
      name: "Marta Jones",
      email: "marta@assetreality.io",
      status: "Admin",
    },
    {
      id: "4",
      name: "Matthew Grey",
      email: "matt@assetreality.io",
      status: "User",
    },
  ];



  const handleLogin = (e: any) => {
    e.preventDefault();
    const data1 :any  = {
      user_id: [Userdata[0].id],
      organization_id: Userdata[0].organization_id,
      group_id: Groupsdata[0].id,
      Email:Email
    };

    dispatch(addToGroup(data1));
    console.log(Email);
  };

  return (
    <>
      <styled.MainBody>
        <styled.MainTitle>
          <span onClick={toggleOperation}>
            <ArrowLeftIcon17 />
          </span>
          <h2>Group 1</h2>
          <button>
            <EditIcon22 />
          </button>
        </styled.MainTitle>

        <form>
          <styled.GroupEmail>
            <styled.GroupInput>
              <label>Email</label>
              <div className="d-flex">
                <EmailIcon24 />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email.."
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </div>
            </styled.GroupInput>
            <styled.GroupBtn>
              <button type="button" onClick={handleLogin}>
                Add To Group
              </button>
            </styled.GroupBtn>
          </styled.GroupEmail>
        </form>

        <styled.GroupTableTitle>
          <h1>
            <span>4</span> Members in Group 1
          </h1>
        </styled.GroupTableTitle>

        <styled.TablesBody>
          <styled.TabHead>
            <styled.HeadColums1>Name / Email</styled.HeadColums1>
            <styled.HeadColums2>Role assigned </styled.HeadColums2>
            <styled.HeadColums3></styled.HeadColums3>
          </styled.TabHead>

          {Grouplist.map((data: any, i: any) => {
            return (
              <>
                <styled.TabBody key={i}>
                  <styled.BodyColums1>
                    <div>
                      <h5>{data.name}</h5>
                      <span>{data.email}</span>
                    </div>
                  </styled.BodyColums1>
                  <styled.BodyColums2>
                    <span className="blue">{data.status}</span>
                  </styled.BodyColums2>
                  <styled.BodyColums3>
                    <button>
                      <DeleteIcon />
                    </button>
                  </styled.BodyColums3>
                </styled.TabBody>
              </>
            );
          })}
        </styled.TablesBody>

        <styled.Modalfooter>
          <button>Done</button>
        </styled.Modalfooter>
      </styled.MainBody>
    </>
  );
}
