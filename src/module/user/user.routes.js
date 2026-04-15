import { Router } from "express";
import validate from "../../common/middleware/validate.middleware";
import Register from "./dto/Regiatration.Dto";
import Login from "./dto/Login.Dto";


Router.post('/registration',validate(Register),authController.register)
Router.post('/login',validate(Login),authController.Login)
Router.post('/logout',authController.logout)