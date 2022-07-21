import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { AiFillMobile, AiFillDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  // console.log(id);
  const [userData, setUserData] = useState([]);
  const getUserData = async () => {
    const res = await fetch(`/getdata/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const data = await res.json();
    if (res.status === 404 || !data) {
      console.log("Data not found in DB!");
    } else {
      setUserData(data);
      console.table(data);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <main className="container px-5 mx-auto">
        <h2 className="mb-10 text-xl font-semibold text-slate-400 capitalize">
          Welcome {userData.name}
        </h2>
        <div className="flex items-center text-xl shadow p-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="ml-10">
            <h3 className="flex items-center">
              <FaUserCircle /> <span className="ml-3">{userData.name}</span>
            </h3>
            <h3 className="flex items-center">
              <AiFillMobile /> <span className="ml-3">{userData.mobile}</span>
            </h3>
            <h3 className="flex items-center">
              <FaEnvelope /> <span className="ml-3">{userData.email}</span>
            </h3>
          </div>
          <div className="flex items-end flex-col ml-5 w-full">
            <button className="btn outline-none border-none text-xl lg:mr-3 lg:mt-3 bg-secondary hover:bg-secondary-focus">
              <TbEdit />
            </button>
            <button className="btn outline-none border-none text-xl lg:mr-3 lg:mt-3 bg-red-600 hover:bg-red-700">
              <AiFillDelete />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Details;
