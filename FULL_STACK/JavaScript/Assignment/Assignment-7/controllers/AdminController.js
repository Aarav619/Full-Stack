const Admin = require("../model/admin")


exports.SignupController = (req, res) => {
    let { firstName, lastName, email, password } = req.body;
    let admin = new Admin({
        firstName,
        lastName,
        email,
        password,
    });
    admin
        .save()//saving data entered using post request in database
        .then(() => res.status(200).send(admin))
        .catch((error) => {
            console.error(error);
            return res.status(500).send("ERROR");
        });
}

exports.LoginUsingEmailPass = (req, res) => {
    let { email, password } = req.body;
    Admin.findOne({ email: email })
        .then((admin) => {
            if (admin) {
                console.info(`User with email ${email} sucessfully found.`);
                if (password === admin.password) {
                    console.info("login Successful");
                    return res.status(200).send({ admin })
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