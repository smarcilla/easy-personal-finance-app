'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.FinanceDataConverter = void 0
var CsvToJson = require('convert-csv-to-json')
var mappers_1 = require('../mappers')
var FinanceDataConverter = /** @class */ (function () {
  function FinanceDataConverter(originCsvFile) {
    this.file = new URL(originCsvFile)
  }
  FinanceDataConverter.prototype.convert = function () {
    return CsvToJson.fieldDelimiter(',')
      .getJsonFromCsv(this.file.pathname)
      .map(function (data) {
        return new mappers_1.FinanceMapper(data).map()
      })
  }
  return FinanceDataConverter
})()
exports.FinanceDataConverter = FinanceDataConverter
