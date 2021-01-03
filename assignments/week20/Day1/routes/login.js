const express = require("express");
var router = express.Router()
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var signUpModel = require('../model/signup.model')

router.post(
    "/signup",
    [
        check("Username", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("Email", "Please enter a valid email").isEmail(),
        check("Password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors
            });
        }

    const {
        Username,
        Email,
        Password
    } = req.body;
    try {
        let user = await signUpModel.findOne({
            email
        });
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
        }

        user = new signUpModel({
            Username,
            Email,
            Password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            "randomString", {
                expiresIn: 10000
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}
);


router.post(
    "/login",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
        min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
        }

        const { email, password } = req.body;
        try {
        let user = await signUpModel.findOne({
            email
        });
        if (!user)
            return res.status(400).json({
            message: "User Not Exist"
            });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({
            message: "Incorrect Password !"
            });

        const payload = {
            user: {
            id: user.id
            }
        };

        jwt.sign(
            payload,
            "randomString",
            {
            expiresIn: 3600
            },
            (err, token) => {
            if (err) throw err;
            res.status(200).json({
                token
            });
            }
        );
        } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Server Error"
        });
        }
    }
    );

module.exports = router;