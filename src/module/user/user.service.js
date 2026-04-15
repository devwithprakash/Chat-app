import { geanerateAccessToken, geanerateRefreshToken } from "../../common/utils/jwt.utils.js";
import User from "./auth.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto"


const hashedToken=(token)=>crypto.createHash("sha256").update(token).digest("hex");

const register = async (data) => {
    const { username, email, password, fullName, bio } = data;
    const emailExists = await User.findOne({ email });
    if (emailExists) throw new Error("Email already exists");

    const usernameExists = await User.findOne({ username });
    if (usernameExists) throw new Error("Username already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        fullName,
        bio
    });
    const userObj = user.toObject();
    delete userObj.password;

    return userObj;
};
const login = async (data) => {
    const { username, password } = data;
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
        throw new Error("Invalid username or password");
    }
    
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
        throw new Error("Invalid username or password");
    }
    const accessToken=  geanerateAccessToken({id:user._id});
    const refreshToken= geanerateRefreshToken({id:user._id});

    user.refreshToken=hashedToken(refreshToken)
    user.save({validateBeforeSave:false})

    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.refreshToken;

    return {userObj,accessToken,refreshToken};
};
const logout=async(userId)=>{
    await User.findOneAndUpdate(userId,{refreshToken:null})
}


export default { register, login, logout };
