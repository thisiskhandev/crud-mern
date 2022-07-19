import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { AiFillMobile, AiFillDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";

const Details = () => {
  return (
    <>
      <main className="container px-5 mx-auto">
        <h2 className="mb-10 text-xl font-semibold text-slate-400">
          Welcome User
        </h2>
        <section className="flex items-center text-xl shadow p-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="ml-10">
            <h3 className="flex items-center">
              <FaUserCircle /> <span className="ml-3">User</span>
            </h3>
            <h3 className="flex items-center">
              <AiFillMobile /> <span className="ml-3">+91123456789</span>
            </h3>
            <h3 className="flex items-center">
              <FaEnvelope /> <span className="ml-3">info@testmail.com</span>
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
        </section>
      </main>
    </>
  );
};

export default Details;
