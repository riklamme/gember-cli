'use strict';

const gc = require('../../gember.config');
const exec = require('shelljs').exec;
const logger = require('../utils/logger');

logger.compile('{start: clean, cleanup build directory...');
exec(`rm -rf ${gc.build.base}/*`);
logger.compile('{finished: clean, build directory is cleaned');
