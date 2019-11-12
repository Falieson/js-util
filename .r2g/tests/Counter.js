#!/usr/bin/env node
'use strict';
const assert = require('assert');
process.on('unhandledRejection', (reason, p) => {
  // unless we force process to exit with 1, process may exit with 0 upon an unhandledRejection
  console.error(reason);
  process.exit(1);
});
// * --- end boilterplate --- * //


const { Counter } = require('@falieson/js-util');

// works
const counter1 = new Counter()
assert.strictEqual(counter1(), 1)
assert.strictEqual(counter1(), 2)
assert.strictEqual(counter1(), 3)

// can have a start value
const counter2 = new Counter({start: 100})
assert.strictEqual(counter2(), 101)
assert.strictEqual(counter2(), 102)
assert.strictEqual(counter2(), 103)
