import Joi from "joi";
import BaseClass from "../../../common/dto/baseDto.js";

class Register extends BaseClass {
    static schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),

        email: Joi.string()
            .email({ tlds: { allow: false } })
            .required(),

        password: Joi.string()
            .min(6)
            .pattern(/^(?=.*[A-Z])(?=.*\d).+$/)
            .required(),

        fullName: Joi.string().max(50).optional(),

        bio: Joi.string().max(150).optional()
    });
}

export default Register;
 
 
 