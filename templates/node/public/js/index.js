import $ from 'jquery';
import { eventRoute } from '../../utils/helper.js';
import {
    signup,
    login,
    logout,
    forgotPassword,
    resetPassword,
} from './views-js/auth-view.js';
import { updateMySettings, updateMyPassword } from './views-js/account-view.js';

//APPLICATION START
$(async function () {
    //EVENT ROUTES
    eventRoute('.btn-auth-signup', 'click', signup);
    eventRoute('.btn-auth-login', 'click', login);
    eventRoute('.logout', 'click', logout);
    eventRoute('.btn-auth-forgot_password', 'click', forgotPassword);
    eventRoute('.btn-auth-reset_password', 'click', resetPassword);
    eventRoute('.btn-auth-save__setting', 'click', updateMySettings);
    eventRoute('.btn-auth-save__password', 'click', updateMyPassword);
});
