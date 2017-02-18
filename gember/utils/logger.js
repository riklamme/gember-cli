"use strict";

const split = require('./stringSplit');
const addZero = require('./addZero');

/**
 * Show the current date
 * @returns {string}
 */
const showDate = () => {
    const date = new Date();
    const dh = addZero(date.getHours());
    const dm = addZero(date.getMinutes());
    const ds = addZero(date.getSeconds());

    return `${dh}:${dm}:${ds}`;
};

const logger = require("tfunk").Compiler({
    'info': function(string) {
        let s = split(string);
        return console.log(this.compile(`{blue:[}${showDate()}{blue:]} {blue:[}{green:${s[0].substring(1)}{blue:]} {cyan:[info]} {grey:${s[1]}`));
    },
    'ready': function(string) {
        let s = split(string);
        return console.log(this.compile(`{blue:[}${showDate()}{blue:]} {blue:[}{green:${s[0].substring(1)}{blue:]} {green:[ready]} {grey:${s[1]}`));
    },
    'start': function(string) {
        let s = split(string);
        return console.log(this.compile(`{blue:[}${showDate()}{blue:]} {blue:[}{green:${s[0].substring(1)}{blue:]} {green:[start]} {grey:${s[1]}`));
    },
    'finished': function(string) {
        let s = split(string);
        return console.log(this.compile(`{blue:[}${showDate()}{blue:]} {blue:[}{green:${s[0].substring(1)}{blue:]} {green:[finished]} {grey:${s[1]}`));
    },
    'change': function(string) {
        let s = split(string);
        return console.log(this.compile(`{blue:[}${showDate()}{blue:]} {blue:[}{green:${s[0].substring(1)}{blue:]} {yellow:[change]}{grey: =>} {white:${s[1]}`));
    },
    'run': function(string) {
        let s = split(string);
        return console.log(this.compile(`{blue:[}${showDate()}{blue:]} {blue:[}{green:${s[0].substring(1)}{blue:]} {blue:[run]}{grey: =>} {white:${s[1]}`));
    },
    'add': function(string) {
        let s = split(string);
        return console.log(this.compile(`{blue:[}${showDate()}{blue:]} {blue:[}{green:${s[0].substring(1)}{blue:]} {magenta:[add]}{grey: =>} {white:${s[1]}`));
    },
    'debug': function(string) {
        let s = split(string);
        return console.log(this.compile(`{blue:[}${showDate()}{blue:]} {blue:[}{green:${s[0].substring(1)}{blue:]} {yellow:[debug]} {white:${s[1]}`));
    },
    'warn': function(string) {
        let s = split(string);
        return console.log(this.compile(`{blue:[}${showDate()}{blue:]} {blue:[}{green:${s[0].substring(1)}{blue:]} {magenta:[warning]} {white:${s[1]}`));
    },
    'error': function(string) {
        let s = split(string);
        return console.log(this.compile(`{blue:[}${showDate()}{blue:]} {red:[error]}{white:${s[0]}`));
    }
});

module.exports = logger;
