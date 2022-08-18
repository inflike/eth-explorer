const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const server = app.listen(3000, function()
{
    console.log();
    console.log(chalk.green('Listening on port', server.address().port));
    console.log();
});

app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(cookieParser());
app.use(methodOverride());
app.set('trust proxy', 1);

app.use(helmet({
    contentSecurityPolicy: false
}));
app.disable('x-powered-by');

app.use('/app', express.static('app'));

app.get('/', function(req, res)
{
    res.sendFile(path.resolve('./app/index.html'));
});
