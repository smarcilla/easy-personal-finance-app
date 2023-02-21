import { FinanceTransactionEntity } from 'easy-personal-finance/lib/entities'
import { EasyFinance, UniqueEntityArray } from 'easy-personal-finance'

import { NextApiResponse, NextApiRequest } from 'next'
import { TransactionModule } from './module'

// https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest/pages/api

const transactionModule = new TransactionModule()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FinanceTransactionEntity[]>,
) {
  console.log(`Request method ${req.method}`)

  if (req.method === 'POST') {
    return transactionModule.controller.importTransactions(req, res)
  } else {
    return transactionModule.controller.find(req, res)
  }
}
