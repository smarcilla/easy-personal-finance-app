import { FinanceTransactionEntity } from 'easy-personal-finance/lib/entities'
import { NextApiRequest, NextApiResponse } from 'next'
import { TransactionService } from './service'

export class TransactionController {
  constructor(private readonly service: TransactionService) {}

  private getSearchText(request: NextApiRequest) {
    return request.query.search ? (request.query.search as string) : undefined
  }

  private getTransactionData(request: NextApiRequest) {
    return {
      body: request.body,
      contentTypeHeader: request.headers['content-type']!,
    }
  }

  find(
    request: NextApiRequest,
    response: NextApiResponse<FinanceTransactionEntity[]>,
  ) {
    const searchText = this.getSearchText(request)

    const transactions = this.service.find(searchText)

    return response.status(200).json(transactions)
  }

  importTransactions(
    request: NextApiRequest,
    response: NextApiResponse<FinanceTransactionEntity[]>,
  ) {
    const searchText = this.getSearchText(request)
    const transactionData = this.getTransactionData(request)

    this.service.addTransactions(transactionData)

    const transactions = this.service.find(searchText)

    return response.status(200).json(transactions)
  }
}
