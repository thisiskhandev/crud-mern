import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    mobile: "",
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

  const addinpdata = async (e) => {
    e.preventDefault();
    const { name, email, mobile } = inpval;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
      }),
    });

    const data = await res.json();
    console.log(data);
    // agar status 404 ha ya data nhi mil raha
    if (res.status === 404 || !data) {
      alert("error fill data!");
      console.log("error fill data!");
    } else {
      alert("data added!");
      navigate("/");
    }
  };
  return (
    <>
      <main className="container mx-auto px-5">
        <form method="POST">
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
                    name="mobile"
                    placeholder="Phone mobile"
                    className="input input-bordered w-full"
                    onChange={setData}
                    value={inpval.mobile}
                  />
                </label>
              </div>
            </section>
            <button
              className="btn btn-outline btn-primary mt-5 w-52 mx-auto text-center block"
              onClick={addinpdata}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Register;
