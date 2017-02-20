'use strict';

const gc = require('../../gember.config');
const exec = require('shelljs').exec;
const logger = require('../utils/logger');
const replace = require('../utils/removeBasePath');
const args = require('yargs')
    			.default({ directory : 'all' })
				.argv;

console.log('scaffold.js => ', args);
console.log('scaffold.js => ', args.directory);

/**
 * Check if directory exist, if not create the directory and log a terminal line
 * @param key
 */
const createDir = (key) => {
    exec(`mkdir -p ${key}`);
    logger.compile(`{add: scaffold, ${replace(key)}`);
};

/**
 * Scaffold sources directory structure
 */
logger.compile('{start: scaffold, scaffold sources folder...');
// Object.keys(gc.sources).forEach(key => createDir(gc.sources[key]));

/**
 * Scaffold build directory structure
 */
logger.compile('{start: scaffold, scaffold build folder...');
// Object.keys(gc.build).forEach(key => createDir(gc.build[key]));
