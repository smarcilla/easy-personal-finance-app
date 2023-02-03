'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var converters_1 = require('../converters')
var originCsvFile =
  'file:///Users/sergio/projects/personal/easy-personal-finance/repos/easy-personal-finance-tools/src/converters/enero-2023.csv'
console.log(originCsvFile)
console.log(new converters_1.FinanceDataConverter(originCsvFile).convert())
