import { useEffect, useState } from "react";
import UserReg from "./component/UserReg";
import ShowUsers from "./components/ShowUsers";
import axios from "axios";

const App = () => {
  let [userData, setUserdata] = useState(null);
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
      <UserReg refreshData={fetchData} />
      <ShowUsers userData={userData} fetchData={fetchData} />
    </div>
  );
};

export default App;
