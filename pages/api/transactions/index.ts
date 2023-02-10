import EasyFinance from '@/../easy-personal-finance/lib'
import { FinanceTransactionEntity } from '@/../easy-personal-finance/lib/entities'
import { NextApiResponse, NextApiRequest } from 'next'

// https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest/pages/api

let transactions: FinanceTransactionEntity[] = []

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FinanceTransactionEntity[]>,
) {
  console.log(`Request method ${req.method}`)
  console.log(transactions.length)

  if (req.method === 'POST') {
    // Process a POST request
    const transactionsDraft = new EasyFinance().transactions
      .withType('form-data')
      .withData({
        body: req.body,
        contentTypeHeader: req.headers['content-type']!,
      })
      .build()
      .find()

    transactions = [...transactions, ...transactionsDraft]

    return res.status(200).json(transactions)
  } else {
    // Handle any other HTTP method
    return res.status(200).json(transactions)
  }
}
