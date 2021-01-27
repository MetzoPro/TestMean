import {runInNewContext} from 'vm';
import {addNewSchtroumpf,
        getSchtroumpfs,
        getSchtroumpfwithID,
        updateSchtroumpf,
        deleteSchtroumpf
} from '../controllers/SchtroumpfContollers';

import {login,register, loginRequired} from "../controllers/userController";

const routes=(app)=>{
    app.route('/schtroumpf')
        .get(loginRequired, getSchtroumpfs)
        .post(loginRequired,addNewSchtroumpf)

    app.route('/schtroumpf/:schtroumpfId')
        .get(loginRequired,getSchtroumpfwithID)
        .put(updateSchtroumpf)
        .delete(deleteSchtroumpf)

    app.route('/auth/register')
        .post(register)

    app.route('/auth/login')
        .post(login)

}

export default routes;
