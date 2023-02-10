import { NextApiResponse, NextApiRequest } from 'next'
import { EasyFinance } from 'easy-personal-finance'
import { FinanceTransaction } from '@/pages/interfaces'
import financeData from './data/finance-transactions.json'
import crypto from 'crypto'
import { FinanceTransactionEntity } from '@/../easy-personal-finance/lib/entities'

const Multipart = require('parse-multipart-data')

//https://github.com/vercel/next.js/blob/canary/examples/api-routes/pages/api/people/index.ts
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<FinanceTransactionEntity[]>,
) {
  let transactions: FinanceTransactionEntity[] = []

  if (_req.method === 'POST') {
    console.log('1: ', _req.headers['content-type'])

    transactions = new EasyFinance().transactions
      .withType('form-data')
      .withData({
        body: _req.body,
        contentTypeHeader: _req.headers['content-type']!,
      })
      .build()
      .find()

    console.log(transactions.length)

    return res.status(200).json(transactions)

    //https://www.npmjs.com/package/parse-multipart-data (useful library to process formdata in server)
    //TODO: Easy finance library will receive this _req.body & process it.
    //https://stackoverflow.com/questions/15806241/how-to-specify-local-modules-as-npm-package-dependencies
  }

  return res.status(200).json(transactions)
}
