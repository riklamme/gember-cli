'use strict';

const gc = require('../../gember.config');

const stringReplace = (string) => string.replace(gc.dir.root, '');

module.exports = stringReplace;

