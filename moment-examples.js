"use strict";

const moment = require('moment');

console.log(moment().format());

let now = moment(),
    timestamp = now.unix(),
    currentMoment = moment.unix(timestamp);

console.log('Current timestamp', currentMoment.format('MMM D, YY @ h:mm a'));