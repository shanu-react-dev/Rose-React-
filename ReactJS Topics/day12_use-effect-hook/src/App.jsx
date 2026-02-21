import React, { Fragment, useEffect, useState } from "react";

const App = () => {
  let [data, setData] = useState(null);
  //   let fetchedData = fetch("https://api.github.com/users/Stack-Sculptor-Shanu");
  //   console.log(fetchedData);
  //   fetchedData
  //     .then((data) => {
  //       // console.log(data.json());
  //       return data.json();
  //     })
  //     .then((mydata) => {
  //       console.log(mydata);
  //       setData(mydata);
  //     });
  useEffect(function () {
    // console.log("Shanu");
    fetch("https://api.github.com/users")
      .then((data) => {
        //   console.log(data);
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  console.log(data);
  return (
    <div>
      <table border="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Github Link</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ele, index) => {
            console.log(ele);
            return (
              <>
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.login}</td>
                  <td>
                    <img
                      src={ele.avatar_url}
                      alt=""
                      height="100px"
                      width="100px"
                    />
                  </td>
                  <td>
                    <a href={ele.html_url}>Visit Github Profile</a>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
