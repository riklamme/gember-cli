'use strict';

const exec = require('shelljs').exec;
const logger = require('./utils/logger');

const execTask = (task, args) => exec(`node gember/task/${task}.js ${args} --colors`);

const argsCli = (args) => {
    // delete args._;
    console.log(typeof args);
    console.log(args);
    console.log('tasks.js =>', args);
};

module.exports = {
    run: (task, args) => execTask(task, argsCli(args))
};
