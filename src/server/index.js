const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../../dist')));

const port = process.env.SERVER_PORT || '4200';

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname,'./../../dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env' == 'development')) {
    app.listen(port, function () {
        console.log(`Server listening on port ${port}!`);
    });
}
else {
    app.listen(port, function () {
        console.log(`Server listening on port ${port}!`);
    });
}
module.exports = app;