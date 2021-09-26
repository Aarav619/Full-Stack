const User = require("../model/user")
const mongoose = require("mongoose");
const Blog = require("../model/blog");

exports.SignupController = (req, res) => {
    let { firstName, lastName, email, password, dateofBirth } = req.body;
    let user = new User({
        firstName,
        lastName,
        email,
        password,
        dateofBirth,
    });
    user
        .save()//saving data entered using post request in database
        .then(() => res.status(200).send(user))
        .catch((error) => {
            console.error(error);
            return res.status(500).send("ERROR");
        });
}

exports.LoginUsingEmailPass = (req, res) => {
    let { email, password } = req.body;
    User.findOne({ email: email })
        .then((user) => {
            if (user) {
                console.info(`User with email ${email} sucessfully found.`);
                if (password === user.password) {
                    console.info("login Successful");
                    return res.status(200).send({user})
                };
                console.warn("Password Incorrect!");
                return res.status(401).send("Password was incorrect")
            }
            console.error(`User with the email :${email} doesn't exits`);
            return res.status(404).send(`User with the ${email} doesn't exits!`)
        })

        .catch((error) => {
            console.error(error);
            return res.status(500).send("ERROR");
        });
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

exports.getBlog = (req, res) => {
    let userID = mongoose.Types.ObjectId(req.params.userID);
    Blog.find({ userID: userID })
        .then((blogArray) => {
            if (blogArray.length > 0) {
                console.info(`Blog for User with UserID:${userID} was successfully found.`)
                return res.status(200).send(blogArray);
            }
            console.error(`No Blog for user with UserID:${userID} found!`)
            return res.status(404).send("NOT FOUND")
        })
        .catch((error) => {
            console.error("Error occurred during api call:", error);
            return res.status(500).send("ERROR")
        })
}

exports.postBlog = (req, res) => {
    let { headings, userBlog, userID } = req.body;
    let blog = new Blog({
        headings,
        userBlog,
        userID,
    });
    blog
        .save()//saving data entered using post request in database
        .then(() => res.status(200).send(blog))
        .catch((error) => {
            console.error(error);
            return res.status(500).send("ERROR");
        });

}