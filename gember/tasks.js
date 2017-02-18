'use strict';

const exec = require('shelljs').exec;
const logger = require('./utils/logger');

const execTask = (task, args) => {
    if (task.length > 0) {

        console.log(`node gember/task/${task}.js ${args} --colors`);

        exec(`node gember/task/${task}.js ${args} --colors`);
    } else {
        logger.compile(`{error: task argument is empty`);
    }
};

const argsCli = (args) => {
    let oArgs = args;

    console.log(typeof oArgs);

    // oArgs.split(',');

    console.log(oArgs);

    // oArgs.map(args => {
    //     console.log(args);
    // });

    console.log('tasks.js =>', oArgs);
};

module.exports = {
    run: (task, args) => execTask(task, argsCli(args))
};
