import EasyFinance from 'easy-personal-finance'
import { ReportController } from './controller'
import { ReportService } from './service'

export class ReportModule {
  readonly controller: ReportController

  constructor() {
    const service = new ReportService()
    this.controller = new ReportController(service, new EasyFinance())
  }
}
