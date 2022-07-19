import React, { useState } from "react";

const Edit = () => {
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
                  value={inpval.number}
                />
              </label>
            </div>
          </section>
          <button className="btn btn-primary mt-5 w-52 mx-auto">Update</button>
        </div>
      </main>
    </>
  );
};

export default Edit;
