import media from './media.js'
import user from './user.js'
import HttpStatus from 'http-status';

const register = (app) => {
    app.use('/', media);
    app.use('/', user);

    app.use((error, req, res, next) => {
        console.error(error);
        return res.status(HttpStatus.BAD_REQUEST).json({
            status: false,
            errorMsg: error.message,
        });
    });
};

export default register;