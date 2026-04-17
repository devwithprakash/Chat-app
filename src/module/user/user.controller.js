import * as authservice from "./user.service.js"

const register = async (req, res) => {
    const resp = await authservice.register(req.body);
    return res.status(200).json({ message: "user register successfully" })
}

const login = async (req, res) => {
    const resp = await authservice.Login(req.body)
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    return res.status(200).json({ message: "user login successfully" }, res, { user: resp.userObj, accessToken: resp.accessToken })

}
const logout = async (req, res) => {
    await authservice.logout(req.user._id)
    res.clearCookie("refreshToken")
    return res.status(200).json({ message: "user logout successfully" })
}

export { register, login, logout }
