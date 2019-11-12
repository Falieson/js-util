#!/usr/bin/env node
'use strict';
const assert = require('assert');
process.on('unhandledRejection', (reason, p) => {
  // unless we force process to exit with 1, process may exit with 0 upon an unhandledRejection
  console.error(reason);
  process.exit(1);
});
// * --- end boilterplate --- * //

// project
const pkg = require('@falieson/js-util');

// ARRAY
assert(typeof(pkg.times === "function"), true)
assert(typeof(pkg.sortByKey === "function"), true)
assert(typeof(pkg.sortObjectArray === "function"), true)

// CONSOLE
assert(typeof(pkg.console === "function"), true)
assert(typeof(pkg.pout === "function"), true)


// DATE
assert(typeof(pkg.currMinute === "function"), true)
assert(typeof(pkg.currMinuteInUnix === "function"), true)
assert(typeof(pkg.currSecondInUnix === "function"), true)
assert(typeof(pkg.dateDaysAgo === "function"), true)
assert(typeof(pkg.dateOffsetBy === "function"), true)

// MATH
assert(typeof(pkg.averageArr === "function"), true)
assert(typeof(pkg.celciusFromFarenheit === "function"), true)
assert(typeof(pkg.celciusFromKelvin === "function"), true)
assert(typeof(pkg.Counter === "function"), true)
assert(typeof(pkg.farenheightFromCelcius === "function"), true)
assert(typeof(pkg.farenheitFromKelvin === "function"), true)
assert(typeof(pkg.getRandomArbitrary === "function"), true)
assert(typeof(pkg.getRandomBoolean === "function"), true)
assert(typeof(pkg.getRandomInt === "function"), true)
assert(typeof(pkg.isPowerOf2 === "function"), true)
assert(typeof(pkg.kelvinFromCelcius === "function"), true)
assert(typeof(pkg.kelvinFromFarenheit === "function"), true)
assert(typeof(pkg.percent === "function"), true)
assert(typeof(pkg.sumArr === "function"), true)
assert(typeof(pkg.sumObjectArr === "function"), true)

// STRING
assert(typeof(pkg.dashToSpaceUppercase === "function"), true)
assert(typeof(pkg.niceBytes === "function"), true)
assert(typeof(pkg.pluralize === "function"), true)
assert(typeof(pkg.suuid === "function"), true)
assert(typeof(pkg.underscoreToSpaceUppercase === "function"), true)
assert(typeof(pkg.unixString === "function"), true)
assert(typeof(pkg.uppercaseFirstLetter === "function"), true)
assert(typeof(pkg.uuid === "function"), true)
assert(typeof(pkg.percentComplete === "function"), true)
