const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const compression = require('compression');
const authRouter = require('./routes/auth.routes');
const viewRouter = require('./routes/views.routes');
const accountRouter = require('./routes/account.routes');
const globalErrorController = require('./utils/error-handler');
const AppError = require('./utils/app-error');

const app = express();

app.enable('trust proxy');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// GLOBAL MIDDLEWARES **
// DEV LOGGING
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// LIMIT REQUESTS
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Set security HTTP headers
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            'script-src': ["'self'", ''],
            'default-src': ["'self'", 'http:', 'ws:', 'wss:'],
            'frame-ancestors': ["'self'", ''],
        },
    })
);

// Body & Cookies parser, reading data from body into req.body
app.use(express.json());
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// CORS
app.use(
    cors({
        origin: '',
        credentials: false, // Cookies
    })
);

app.use(compression());

// TEST MIDDLEWARE
// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     next();
// });

// CLIENT-SIDE ROUTES **
app.use('/', viewRouter);

// SERVER-SIDE ROUTES **
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/account', accountRouter);

// GLOBAL ERR HANDLER **
app.all('*', (req, res, next) => {
    next(new AppError('wrong link', 404));
});

app.use(globalErrorController);

module.exports = app;
