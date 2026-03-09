import { useEffect, useState } from "react";
import UserReg from "./component/UserReg";
import ShowUsers from "./components/ShowUsers";
import axios from "axios";
import Registration from "./RegisterForm/Registration";

const App = () => {
  let [userData, setUserdata] = useState(null);
  let [editUser, setEditUser] = useState(null);
  let fetchData = async () => {
    let { data } = await axios.get("http://localhost:5000/user");
    setUserdata(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {/* <UserReg
        refreshData={fetchData}
        setEditUser={setEditUser}
        editUser={editUser}
      /> */}

      <Registration
        refreshData={fetchData}
        editUser={editUser}
        setEditUser={setEditUser}
      />
      <ShowUsers
        userData={userData}
        fetchData={fetchData}
        setEditUser={setEditUser}
        editUser={editUser}
      />
    </div>
  );
};

export default App;
