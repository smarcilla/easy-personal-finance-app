import { FinanceTransactionEntity } from '@/../easy-personal-finance/lib/entities'

export class ReportService {
  constructor(private readonly client = fetch) {}

  async getTransactions() {
    const result = await this.client('http://localhost:3000/api/transactions')
    const data = await result.json()

    return data as FinanceTransactionEntity[]
  }
}
