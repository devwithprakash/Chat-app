import Joi from "joi"
import BaseClass from "../../../common/dto/baseDto.js"

class Login extends BaseClass{
    static Schema=Joi.object({
      username: Joi.string().min(3).max(30).required(),
      password: Joi.string().min(6).pattern(/^(?=.*[A-Z])(?=.*\d).+$/).required(),
    })
}

export default Login