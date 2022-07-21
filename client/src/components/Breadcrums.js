import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrums = () => {
  let location = useLocation();
  location = location.pathname
    .replaceAll("/", "")
    .replace(new RegExp("[0-9]", "g"), "");
  // console.log(location);
  return (
    <>
      <main className="container mx-auto px-5 my-5">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>
              <NavLink to="/">Add Document</NavLink>
            </li>
          </ul>
        </div>
        {/* <h1 className="capitalize my-5">{location}</h1> */}
      </main>
    </>
  );
};

export default Breadcrums;
