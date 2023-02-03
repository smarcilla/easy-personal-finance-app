import { CsvToJsonDataType, FinanceDataType } from '../types/finance.types'
export declare class FinanceMapper {
  private readonly data
  constructor(data: CsvToJsonDataType)
  map(): FinanceDataType
}
