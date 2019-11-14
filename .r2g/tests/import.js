#!/usr/bin/env node
'use strict';
process.on('unhandledRejection', (reason, p) => {
  // unless we force process to exit with 1, process may exit with 0 upon an unhandledRejection
  console.error(reason);
  process.exit(1);
});
const assert = require('assert');
// * --- end boilterplate --- * //

// project
const pkg = require('@falieson/js-util');

// ARRAY
assert.equal(typeof(pkg.times), "function", "times")
assert.equal(typeof(pkg.sortByKey), "function", "sortByKey")
assert.equal(typeof(pkg.sortObjectArray), "function", "sortObjectArray")

// CONSOLE
assert.equal(typeof(pkg.console), "function", "console")
assert.equal(typeof(pkg.pout), "function", "pout")

// DATE
assert.equal(typeof(pkg.currMinute), "function", "currMinute")
assert.equal(typeof(pkg.currMinuteInUnix), "function", "currMinuteInUnix")
assert.equal(typeof(pkg.currSecondInUnix), "function", "currSecondInUnix")
assert.equal(typeof(pkg.dateDaysAgo), "function", "dateDaysAgo")
assert.equal(typeof(pkg.dateOffsetBy), "function", "dateOffsetBy")

// MATH
assert.equal(typeof(pkg.averageArr), "function", "averageArr")
assert.equal(typeof(pkg.celciusFromFarenheit), "function", "celciusFromFarenheit")
assert.equal(typeof(pkg.celciusFromKelvin), "function", "celciusFromKelvin")
assert.equal(typeof(pkg.Counter), "function", "Counter")
assert.equal(typeof(pkg.farenheightFromCelcius), "function", "farenheightFromCelcius")
assert.equal(typeof(pkg.farenheitFromKelvin), "function", "farenheitFromKelvin")

assert.equal(typeof(pkg.randomBoolean), "function", "randomBoolean")
assert.equal(typeof(pkg.randomInt), "function", "randomInt")
assert.equal(typeof(pkg.randomFloat), "function", "randomFloat")
assert.equal(typeof(pkg.getRandomBoolean), "undefined", "getRandomBoolean") // negative tests
assert.equal(typeof(pkg.getRandomInt), "undefined", "getRandomInt") // negative tests
assert.equal(typeof(pkg.getRandomArbitrary), "undefined", "getRandomArbitrary") // negative tests

assert.equal(typeof(pkg.isPowerOf2), "function", "isPowerOf2")
assert.equal(typeof(pkg.kelvinFromCelcius), "function", "kelvinFromCelcius")
assert.equal(typeof(pkg.kelvinFromFarenheit), "function", "kelvinFromFarenheit")
assert.equal(typeof(pkg.percent), "function", "percent")
assert.equal(typeof(pkg.sumArr), "function", "sumArr")
assert.equal(typeof(pkg.sumObjectArr), "function", "sumObjectArr")

// STRING
assert.equal(typeof(pkg.dashToSpaceUppercase), "function", "dashToSpaceUppercase")
assert.equal(typeof(pkg.niceBytes), "function", "niceBytes")
assert.equal(typeof(pkg.pluralize), "function", "pluralize")
assert.equal(typeof(pkg.suuid), "function", "suuid")
assert.equal(typeof(pkg.underscoreToSpaceUppercase), "function", "underscoreToSpaceUppercase")
assert.equal(typeof(pkg.unixString), "function", "unixString")
assert.equal(typeof(pkg.uppercaseFirstLetter), "function", "uppercaseFirstLetter")
assert.equal(typeof(pkg.uuid), "function", "uuid")
assert.equal(typeof(pkg.percentComplete), "function", "percentComplete")
