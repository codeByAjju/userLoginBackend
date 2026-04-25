import { Router } from 'express';
import media from './media.js'
import user from './user.js'
import HttpStatus from 'http-status';

const router = Router();
const register = (app) => {
    app.use(router);
    router.use('/', [
        media,
        user,
    ])
    app.use((error, req, res, next) => {
        console.log(error)
       return  res.status(HttpStatus.BAD_REQUEST).json({
            status: false,
            errorMsg: error.message
        })
    })
}

export default register;