const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// router.get("/", (req, res) => {
//   console.log("connect");
// });

// registeration
router.post("/register", async (req, res) => {
  //   console.log(req.body);
  const { name, email, mobile } = req.body;
  if (!name || !email || !mobile) {
    res.status(422).send("please fill the data");
  }
  try {
    // if user is available
    // aik database wala email ha dusra wala jo humne bheja ha
    const preuser = await users.findOne({ email: email });
    console.log(preuser);
    if (preuser) {
      res.status(422).json("this user's mail is already present!");
    } else {
      // if user is first time filling the data
      const adduser = new users({ name, email, mobile });
      // adding data into database
      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

// get user data
router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get individual user data
router.get("/getdata/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const userindividual = await users.findById({ _id: id });
    console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).send(error);
    // res.status(404).send("Not found");
  }
});

// update user data
router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete user
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await users.findByIdAndDelete({ _id: id });
    console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
