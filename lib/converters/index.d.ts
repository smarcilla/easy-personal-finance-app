import { FinanceDataType } from '../types/finance.types'
export declare class FinanceDataConverter {
  private file
  constructor(originCsvFile: string)
  convert(): FinanceDataType[]
}
