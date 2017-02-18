#! /usr/bin/env node

'use strict';

const tasks = require('./gember/tasks');
const exec = require('shelljs').exec;
const args = require('yargs')
                .array('gember')
                .argv;

const task = args._;
let tasksArgs = args;

console.log(tasksArgs);

delete tasksArgs['_'];
delete tasksArgs['$0'];

console.log('taskargs => ', tasksArgs);
console.log('taskargs => ', tasksArgs[0]);

exec(`node gember/task/start.js --colors`);
tasks.run(task, [tasksArgs]);
