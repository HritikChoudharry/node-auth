import { Router } from "express";
import { check, validationResult } from "express-validator/check";
import { genSalt, hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
const router = Router();
import User from "../model/User";

router.post(
"/signup",
[
check("username", "Please Enter a Valid Username")
.not()
.isEmpty(),
check("email", "Please enter a valid email").isEmail(),
check("password", "Please enter a valid password").isLength({
min: 6
})],
async (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty())
 {
return res.status(400).json({
errors: errors.array()
});
}
const {
username,
email,
password
} = req.body;
try {
let user = await User.findOne({
email
});
if (HR) {
return res.status(400).json({
msg: "HR ID Already Exists"
});
}
HR = new HR({
username,
email,
password
});
const salt = await genSalt(10);
user.password = await hash(password, salt);
await user.save();
const payload = {
user: {
id: user.id
}
};
    sign(
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
export default router;
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
    try {let user = await User.findOne({
    email
    });
    if (!HR)
    return res.status(400).json({
    message: "HR ID Does Not Exist"
    });
    const isMatch = await compare(password, user.password);
    if (!isMatch)
    return res.status(400).json({
    message: "Incorrect Password !"
    });
    const payload = {
    user: {
    id: user.id
    }
    };
    sign(
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
)    