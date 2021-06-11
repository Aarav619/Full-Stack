const express = require("express");

const router = express();
const User = require("../model/User");


router.post("/signup", (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  let user = new User({
    firstName,
    lastName,
    email,
    password,
  });
  user
    .save()
    .then(() => res.status(200).send(user))
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR");
    });
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      console.info(`User with email ${email} sucessfully found.`);
      if (password === user.password) {
        console.info("login Successful");
        return res.status(200).send(user);
      }
      console.warn("Password Incorrect!");
      return res.status(401).send("Password was incorrect")
    })
    .catch((error) => {
      console.error(`User with the email :${email} doesn't exits`);
      return res.status(404).send(`User with the ${email} doesn't exits!`)
    })
})

//updating a user
router.put("/update/:email", (req, res) => {
  let { email, password, firstName, lastName } = req.body;
  let emailParam = req.params.email; //to retrieve email from path/route
  //updateOne(1param ,2param)  1param:"where to update" 2 param :"what to update"
  User.updateOne({ email: emailParam },
    { $set: { email, password, firstName, lastName } }) //$set: internal command for mongodb to update

    .then(() => {
      console.info("Update Successful");
      res.status(200).send({ email, password, firstName, lastName });
    })
    .catch((error) => {
      console.error("There was an error while updating!");
      res.status(500).send("There was an error while updating User!");
    })
})

module.exports = router;