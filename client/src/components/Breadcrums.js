import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrums = () => {
  let location = useLocation();
  // let navigate = useNavigate();
  // location = location.pathname
  //   .replaceAll("/", "")
  //   .replace(new RegExp("[0-9]", "g"), "");
  let RegExp = /abc/g;
  location = location.pathname.replace(RegExp, "");
  console.log(location);
  return (
    <>
      <main className="container mx-auto px-5 my-5">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <NavLink to="/" className="underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/view" className="underline">
                View All
              </NavLink>
            </li>
            <li>Add Document</li>
          </ul>
        </div>
        {/* <h1 className="capitalize my-5">{location}</h1> */}
      </main>
    </>
  );
};

export default Breadcrums;
