'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.FinanceMapper = void 0
var FinanceMapper = /** @class */ (function () {
  function FinanceMapper(data) {
    this.data = data
  }
  FinanceMapper.prototype.map = function () {
    return {
      date: this.data.Fecha,
      concept: this.data.Concepto,
      movement: this.data.Movimiento,
      amount: this.data.Importe,
      notes: this.data.Observaciones,
    }
  }
  return FinanceMapper
})()
exports.FinanceMapper = FinanceMapper
