import { EasyFinance } from 'easy-personal-finance'
import {
  BalanceSheetService,
  ExpenseService,
  IncomeService,
} from 'easy-personal-finance/lib/reports'
import { ReportService } from './service'

export class ReportController {
  constructor(
    private readonly service: ReportService,
    private readonly easyFinance: EasyFinance,
  ) {}

  async getBalance() {
    const financeEntities = await this.service.getTransactions()

    const reportService = this.easyFinance.reports
      .withType('balance')
      .withData(financeEntities)
      .build() as BalanceSheetService

    return reportService.calculateReport()
  }

  async getIncomesByConcept() {
    const financeEntities = await this.service.getTransactions()
    const reportService = this.easyFinance.reports
      .withType('income')
      .withData(financeEntities)
      .build() as IncomeService

    return reportService.calculate('concept')
  }

  async getIncomesByMovement() {
    const financeEntities = await this.service.getTransactions()
    const reportService = this.easyFinance.reports
      .withType('income')
      .withData(financeEntities)
      .build() as IncomeService

    return reportService.calculate('movement')
  }

  async getIncomesByNotes() {
    const financeEntities = await this.service.getTransactions()
    const reportService = this.easyFinance.reports
      .withType('income')
      .withData(financeEntities)
      .build() as IncomeService

    return reportService.calculate('notes')
  }

  async getExpensesByConcept() {
    const financeEntities = await this.service.getTransactions()
    const reportService = this.easyFinance.reports
      .withType('expense')
      .withData(financeEntities)
      .build() as ExpenseService

    return reportService.calculate('concept')
  }

  async getExpensesByMovement() {
    const financeEntities = await this.service.getTransactions()
    const reportService = this.easyFinance.reports
      .withType('expense')
      .withData(financeEntities)
      .build() as ExpenseService

    return reportService.calculate('movement')
  }

  async getExpensesByNotes() {
    const financeEntities = await this.service.getTransactions()
    const reportService = this.easyFinance.reports
      .withType('expense')
      .withData(financeEntities)
      .build() as ExpenseService

    return reportService.calculate('notes')
  }
}
