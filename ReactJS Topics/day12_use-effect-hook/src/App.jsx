import React, { Fragment, useEffect, useState } from "react";
import Form from "./Form";
import axios from "axios";

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

  let [count, setCount] = useState(0);

  let fetchData = async function () {
    let data = await axios.get("https://api.github.com/users");
    console.log(data);
    setData(data.data);
  };
  useEffect(
    function () {
      // fetch("https://api.github.com/users")
      //   .then((data) => {
      //     return data.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //     setData(data);
      //   });
      fetchData();
      return () => {
        console.log("Component unmounted...");
      };
    },
    [count],
  );

  console.log(data);
  return (
    <div>
      <Form data={data} />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button>Decrement</button>
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
            // console.log(ele);
            return (
              <tr key={index}>
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
