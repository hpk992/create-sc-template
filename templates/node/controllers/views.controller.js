const User = require('../models/user.model');
const catchAsync = require('../utils/catch-async');

exports.getAppMain = catchAsync(async (req, res, next) => {
    if (req.user) {
        const user = await User.findById(req.user.id).populate({
            path: '#dataset',
        });

        return res.status(200).render('index', {
            user,
            title: '#main-page-loggedin',
        });
    }

    res.status(200).render('index', {
        title: '#main-page',
    });
});

exports.getLoginForm = (req, res) => {
    res.status(200).render('login', {
        title: 'log in',
    });
};

exports.getSignupForm = (req, res) => {
    res.status(200).render('signup', {
        title: 'sign up',
    });
};

exports.getForgotPasswordForm = (req, res) => {
    res.status(200).render('forgotPassword', {
        title: 'forgot password',
    });
};

exports.getResetPasswordForm = (req, res) => {
    res.status(200).render('resetPassword', {
        title: 'reset password',
    });
};

exports.getAccount = (req, res) => {
    res.status(200).render('account', {
        title: 'my account',
    });
};
