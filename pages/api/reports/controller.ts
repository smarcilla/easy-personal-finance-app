import { EasyFinance } from 'easy-personal-finance'
import { BalanceSheetService } from 'easy-personal-finance/lib/reports'
import { ReportService } from './service'

export class ReportController {
  constructor(private readonly service: ReportService) {}

  async getBalance() {
    const financeEntities = await this.service.getTransactions()

    const reportService = new EasyFinance().reports
      .withType('balance')
      .withData(financeEntities)
      .build() as BalanceSheetService

    return reportService.calculateReport()
  }
}
