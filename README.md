# @falieson/js-util

A set of js utilities that @falieson uses in most of his projects.

## Install

```bash
$ npm i -S @falieson/js-unit
```

```bash
$ yarn @falieson/js-unit
```

## SUMMARY

| category | functions |
|----------|-----------|
| array    | 3         |
| console  | 2         |
| date     | 5         |
| math     | 15        |
| string   | 9         |
| TOTAL    | 34        |

## Functions and Coverage

<!-- [make tables with](https://thisdavej.com/copy-table-in-excel-and-paste-as-a-markdown-table/) -->

| category | topic           | functions                                                                                                                         | functionCount | test |
|----------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|---------------|------|
| array    | sort            | sortBykey, sortObjectArray                                                                                                        | 2             | 0%   |
| array    | times           | times                                                                                                                             | 1             | 0%   |
| console  | leveledConsole  | console                                                                                                                           | 1             | 0%   |
| console  | pout            | pout                                                                                                                              | 1             | 0%   |
| date     | current         | currMinute, currMinuteInUnix, currSecondInUnix                                                                                    | 3             | 0%   |
| date     | date            | dateDaysAgo, dateOffsetBy                                                                                                         | 2             | 0%   |
| math     | array           | averageArr,  sumArr,  sumObjectArr                                                                                                | 3             | 0%   |
| math     | Counter         | Counter                                                                                                                           | 1             | 100% |
| math     | isPowerOf2      | isPowerOf2                                                                                                                        | 1             | 0%   |
| math     | percent         | percent                                                                                                                           | 1             | 0%   |
| math     | random          | randomBoolean,  randomInt,  randomFloat                                                                              | 3             | 0%   |
| math     | temperature     | celciusFromFarenheit,  farenheightFromCelcius,  kelvinFromCelcius,  celciusFromKelvin,  kelvinFromFarenheit,  farenheitFromKelvin | 6             | 0%   |
| string   | nicebytes       | niceBytes                                                                                                                         | 1             | 0%   |
| string   | percentComplete | percentComplete                                                                                                                   | 1             | 0%   |
| string   | string          | dashToSpaceUppercase,  pluralize,  suuid,  underscoreToSpaceUppercase,  unixString,  uppercaseFirstLetter,  uuid                  | 7             | 0%   |
| | | | 34 | 1.5% |

## TODOs

- [ ] split up all the functions into their own npm modules like `@falieson/js-util.times`
- [ ] 100% test coverage
