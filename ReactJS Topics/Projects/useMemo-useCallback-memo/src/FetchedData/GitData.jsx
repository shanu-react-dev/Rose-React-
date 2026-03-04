import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import AddUser from "../AddUser";

const GitData = () => {
  let [userData, setUserData] = useState(null);
  let fetchData = async function () {
    try {
      let { data } = await axios.get("https://api.github.com/users");
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <AddUser />
      <table border={"2px"} style={{ width: "50%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Git Link</th>
            <th>Photo</th>
          </tr>
        </thead>

        <tbody>
          {userData?.map((ele, index) => {
            return (
              <Fragment key={index}>
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.login}</td>
                  <td>
                    <a href={ele.html_url}>Click Here</a>
                  </td>
                  <td>
                    <img
                      src={ele.avatar_url}
                      alt=""
                      height={"200px"}
                      width={"200px"}
                    />
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GitData;
