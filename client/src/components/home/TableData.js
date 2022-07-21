import { BsEyeFill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const TableData = () => {
  const [userData, setUserData] = useState([]);
  // console.log(getuserdata);
  const getUserData = async () => {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    // console.log(data);

    if (res.status === 404 || !data) {
      console.log("Data not found in the database!");
    } else {
      setUserData(data);
      console.log("data found!");
      console.table(data[0]);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="overflow-x-auto mt-50">
        <table className="table table-zebra w-full crud_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((val, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.mobile}</td>
                  <td>
                    <NavLink to={`view/${val._id}`}>
                      <button className="btn outline-none border-none text-xl lg:mr-3 lg:mt-3 bg-primary hover:bg-primary-focus">
                        <BsEyeFill />
                      </button>
                    </NavLink>
                    <NavLink to={`edit/${val._id}`}>
                      <button className="btn outline-none border-none text-xl lg:mr-3 lg:mt-3 bg-secondary hover:bg-secondary-focus">
                        <TbEdit />
                      </button>
                    </NavLink>
                    <button className="btn outline-none border-none text-xl lg:mr-3 lg:mt-3 bg-red-600 hover:bg-red-700">
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableData;
