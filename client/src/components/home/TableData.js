import { BsEyeFill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { adddata } from "../context/ContextProvider";

const TableData = () => {
  const [userData, setUserData] = useState([]);
  // alert box will show if data is found
  const [udata, setUdata] = useState(adddata);
  // alert box show timeout
  const [showElement, setShowElement] = useState(true);
  // click to hide alert box
  const [visible, setVisible] = useState(true);
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

  const deleteUser = async (id) => {
    const res = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
      },
    });

    const deleteData = await res.json();
    // console.log(deleteData);

    if (res.status === 422 || !deleteData) {
      console.log("ERROR!!!");
    } else {
      console.log(`User ${deleteData.name} has been deleted!`);
      // It will refresh the page
      getUserData();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowElement(false);
    }, 3000);
    getUserData();
  }, []);

  return (
    <>
      {showElement ? (
        <>
          {udata && visible ? (
            <>
              <div
                className="alert alert-success shadow-xl mb-10 w-1/2 mx-auto"
                onClick={() => setVisible(false)}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-white">
                    Success! A user has been added
                  </span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

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
                      <button className="btn outline-none border-none text-xl lg:mr-3 mt-2 mb-2 bg-primary hover:bg-primary-focus">
                        <BsEyeFill />
                      </button>
                    </NavLink>
                    <NavLink to={`edit/${val._id}`}>
                      <button className="btn outline-none border-none text-xl lg:mr-3 mt-2 mb-2 bg-secondary hover:bg-secondary-focus">
                        <TbEdit />
                      </button>
                    </NavLink>

                    <button
                      onClick={() => deleteUser(val._id)}
                      className="btn outline-none border-none text-xl lg:mr-3 mt-2 mb-2 bg-red-600 hover:bg-red-700"
                    >
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
