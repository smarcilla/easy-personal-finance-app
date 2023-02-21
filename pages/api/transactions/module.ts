import EasyFinance, { TransactionEntityFilter } from 'easy-personal-finance'
import { TransactionController } from './controller'
import { TransactionService } from './service'

export class TransactionModule {
  readonly controller: TransactionController

  constructor() {
    const service = new TransactionService(
      new EasyFinance(),
      new TransactionEntityFilter(),
    )
    this.controller = new TransactionController(service)
  }
}
