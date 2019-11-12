'use strict';


// ARRAY
export { // test
  times, // [ ]
  sortByKey, // [ ]
  sortObjectArray, // [ ]
} from './array'
// CONSOLE
export { // test
  default as console, // [ ]
  pout, // [ ]
} from './console'
// DATE
export { // test
  currMinute, // [ ]
  currMinuteInUnix, // [ ]
  currSecondInUnix, // [ ]
  dateDaysAgo, // [ ]
  dateOffsetBy, // [ ]
} from './date'
// MATH
export { // test
  averageArr,
  celciusFromFarenheit,
  celciusFromKelvin,
  Counter,
  farenheightFromCelcius,
  farenheitFromKelvin,
  getRandomArbitrary,
  getRandomBoolean,
  getRandomInt,
  isPowerOf2,
  kelvinFromCelcius,
  kelvinFromFarenheit,
  percent,
  sumArr,
  sumObjectArr,
} from './math'
// STRING
export { // test
  dashToSpaceUppercase, // [ ]
  niceBytes, // [ ]
  pluralize, // [ ]
  suuid, // [ ]
  underscoreToSpaceUppercase, // [ ]
  unixString, // [ ]
  uppercaseFirstLetter, // [ ]
  uuid, // [ ]
  percentComplete, // [ ]
} from './string'

export default exports

// * --- tests --- * //
export { getDirName } from './smoke-test.helpers'

export const r2gSmokeTest = async () => {
  const Counter = exports.Counter
  const counter = new Counter({start: 100})
  return counter() === 101;
}
