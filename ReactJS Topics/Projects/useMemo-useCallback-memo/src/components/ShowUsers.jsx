import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineUserDelete } from "react-icons/ai";
import UpdateForm from "../component/UpdateForm";

const ShowUsers = ({ userData, fetchData }) => {
  let handleDelete = async (id) => {
    let { data } = await axios.delete(`http://localhost:5000/user/${id}`);
    console.log();
    fetchData();
  };

  let handleUpdate = async (id) => {
    console.log(id);
    let { data } = await axios.get(`http://localhost:5000/user/${id}`);
    console.log(data);
  };
  return (
    <div>
      <table border="">
        <thead>
          <tr>
            <th>id</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Edit or Delete</th>
          </tr>
        </thead>

        <tbody>
          {userData?.map((data) => {
            return (
              <Fragment key={data.id}>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.userName}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                  <td>
                    <button onClick={() => handleUpdate(data.id)}>
                      <FaUserEdit />
                    </button>
                    <button onClick={() => handleDelete(data.id)}>
                      <AiOutlineUserDelete />
                    </button>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>

        <UpdateForm />
      </table>
    </div>
  );
};

export default ShowUsers;
