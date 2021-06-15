const User = require("../model/User")
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");//for verification token

exports.findUserbyfirstNameandlastName = (req, res) => {
  let { firstName, lastName } = req.query;
  User.find({ firstName: firstName, lastName: lastName })
    .then((userArray) => {
      if (userArray.length === 0) {
        console.info(`No User found with First Name: ${firstName} and Last Name: ${lastName}`);
        return res.status(404).send("No User found.");
      }
      return res.status(200).send(userArray);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR");
    })
}

exports.UpdateUsingId = (req, res) => {
  let { email, password, firstName, lastName } = req.body;
  let id = req.params.id; //to retrieve id from path/route
  id = mongoose.Types.ObjectId(id);//making id of objectId type
  //updateOne(1param ,2param)  1param:"where to update" 2 param :"what to update"
  User.updateOne({ _id: id },
    { $set: { email, password, firstName, lastName } }) //$set: internal command for mongodb to update

    .then(() => {
      console.info("Update Successful");
      res.status(200).send({ email, password, firstName, lastName });
    })
    .catch((error) => {
      console.error("There was an error while updating!");
      res.status(500).send("There was an error while updating User!");
    })
}

exports.UpdateUsingEmail = (req, res) => {
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
}

exports.SearchUsingId = (req, res) => {
  let id = req.params.id;
  id = mongoose.Types.ObjectId(id)
  User.findOne({ _id: id })
    .then((user) => {
      if (user) {
        console.info("User found successfully.");
        return res.status(200).send(user);
      }
      console.error("No User found!");
      return res.status(404).send("NOT FOUND");
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR")
    })
}

exports.LoginUsingEmailPass = (req, res) => {
  let { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        console.info(`User with email ${email} sucessfully found.`);
        if (password === user.password) {
          const token = JWT.sign(
            {
              email: user.email,
            },
            "TESTSecretKey",
            {
              expiresIn: "1h",
            }
          );
          console.info("login Successful");
          return res.status(200).send({ user, token })
        };
        console.warn("Password Incorrect!");
        return res.status(401).send("Password was incorrect")
      }
      console.error(`User with the email :${email} doesn't exits`);
      return res.status(404).send(`User with the ${email} doesn't exits!`)
    })

    .catch((error) => {
      console.error(error);
      return res.status(500).send(error)
    });
}

exports.SignupController = (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  let user = new User({
    firstName,
    lastName,
    email,
    password,
  });
  user
    .save()//saving data entered using post request in database
    .then(() => res.status(200).send(user))
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR");
    });
}

//token validation
exports.isValid = (req, res) => {
  return res.status(200).send("Token valid");
};