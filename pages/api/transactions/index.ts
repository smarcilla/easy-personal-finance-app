import EasyFinance from '@/../easy-personal-finance/lib'
import { FinanceTransactionEntity } from '@/../easy-personal-finance/lib/entities'
import { NextApiResponse, NextApiRequest } from 'next'

// https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest/pages/api

let transactions: FinanceTransactionEntity[] = []

const FilterTransactions =
  (searchText: string) => (transaction: FinanceTransactionEntity) =>
    transaction.amount?.toString().includes(searchText) ||
    transaction.concept?.includes(searchText) ||
    transaction.movement?.includes(searchText) ||
    transaction.notes?.includes(searchText)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FinanceTransactionEntity[]>,
) {
  console.log(`Request method ${req.method}`)
  console.log(`Request query ${JSON.stringify(req.query)}`)

  const searchParam = req.query.search
    ? (req.query.search as string)
    : undefined

  if (req.method === 'POST') {
    // Process a POST request
    const transactionsDraft = new EasyFinance().transactions
      .withType('form-data')
      .withData({
        body: req.body,
        contentTypeHeader: req.headers['content-type']!,
      })
      .build()
      .find({ text: searchParam })

    transactions = [...transactions, ...transactionsDraft]

    console.log(transactions.length)

    return res.status(200).json(transactions)
  } else {
    // Handle any other HTTP method
    console.log(transactions.length)
    let searchTransactions = [...transactions]

    if (searchParam) {
      const filterTransaction = FilterTransactions(searchParam)

      searchTransactions = transactions.filter(filterTransaction)
    }

    console.log(searchTransactions.length)

    return res.status(200).json(searchTransactions)
  }
}
