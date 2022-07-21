import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    number: "",
  });
  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInpval((prevval) => {
      return {
        ...prevval,
        [name]: value,
      };
    });
  };
  const getUserData = async () => {
    const res = await fetch(`/getdata/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const data = await res.json();

    if (!data || res.status === 404) {
      console.log("not found data");
    } else {
      console.log("Edit page - data found!");
      setInpval(data);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const { name, email, mobile } = inpval;
    const res = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 422) {
      alert("fill the data");
    } else {
      alert("date updated!");
      navigate("/");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <main className="container mx-auto px-5">
        <div className="form-control">
          <section className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
            <div>
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  onChange={setData}
                  value={inpval.name}
                />
              </label>
            </div>
            <div>
              <label className="input-group">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="info@site.com"
                  className="input input-bordered w-full"
                  onChange={setData}
                  value={inpval.email}
                />
              </label>
            </div>
            <div>
              <label className="input-group">
                <span>Mobile</span>
                <input
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  onChange={setData}
                  value={inpval.mobile}
                />
              </label>
            </div>
          </section>
          <button
            className="btn btn-primary mt-5 w-52 mx-auto"
            onClick={updateUser}
          >
            Update
          </button>
        </div>
      </main>
    </>
  );
};

export default Edit;
