#! /usr/bin/env node

'use strict';

const tasks = require('./gember/tasks');
const args = require('yargs').argv;
const task = args._;
const tasksArgs = args;

console.log('gember.js => ', args);
console.log('taskargs => ', tasksArgs);

tasks.run('start');
tasks.run(task, args);
