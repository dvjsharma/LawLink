import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

const register = async (req, res) => {
    const {email, password, name, usertype} = req.body;
    let user = await User.findOne({ email });
    if (user)
    {
        return res.status(404).json({
            success: false,
            message: "User already exists."
        });
    }
    // console.log(req.body);
    const hashedpassword = await bcrypt.hash(password, 10);
    user = await User.create({
        email,
        password: hashedpassword,
        name, 
        usertype
    });
    sendCookie(user, res, "Registered Successfully", 201);
}

const login = async (req, res) => {
    const {email, password} = req.body;
    let user = await User.findOne({email}).select("+password");
    if (!user)
    {
        return res.status(404).json({
            success: false,
            message: "Invalid Email or Password."
        });
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch)
    {
        return res.status(404).json({
            success: false,
            message: "Invalid Email or Password."
        });
    }

    sendCookie(user, res, `Welcome back, ${user.name}`, 200);
}

export { login, register};