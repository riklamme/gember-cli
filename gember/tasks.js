'use strict';

const exec = require('shelljs').exec;
const logger = require('./utils/logger');

const execTask = (task, args) => {

    console.log(args);
    
    if (task.length !== 0) {

        console.log(`node task/${task}.js --${args} --colors`);

        exec(`node ./task/${task}.js --${args} --colors`);
    } else if (task.length === 0) {
        logger.compile(`{error: task is missing`);
    }
};

module.exports = {
    run: (task, args) => execTask(task, args)
};
