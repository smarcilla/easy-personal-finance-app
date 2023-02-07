import { NextApiResponse, NextApiRequest } from 'next'
import { EasyFinance } from 'easy-personal-finance'
import { FinanceTransaction } from '@/pages/interfaces'
import financeData from './data/finance-transactions.json'
import crypto from 'crypto'

const Multipart = require('parse-multipart-data')

//https://github.com/vercel/next.js/blob/canary/examples/api-routes/pages/api/people/index.ts
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<FinanceTransaction[]>,
) {
  if (_req.method === 'POST') {
    console.log('1: ', _req.headers['content-type'])

    //https://www.npmjs.com/package/parse-multipart-data (useful library to process formdata in server)
    const boundary = Multipart.getBoundary(_req.headers['content-type']!)
    console.log('2: ', boundary)
    console.log('3: ', _req.body)
    const parts: {
      ilename?: string
      name?: string
      type: string
      data: Buffer
    }[] = Multipart.parse(Buffer.from(_req.body), boundary)
    console.log('4: ', parts)
    parts.forEach((part) => {
      console.log('5: ', part)
      //extract file content & convert it in string format
      console.log('6: ', part.data.toString())
    })
    //TODO: Easy finance library will receive this _req.body & process it.
    //console.log(new FinanceDataConverter(JSON.parse(_req.body).url).convert())
  }
  const easyFinance = new EasyFinance()
  console.log(easyFinance)
  const financeTransactions: FinanceTransaction[] =
    financeData.data.map<FinanceTransaction>((data) => {
      const id = crypto.createHash('sha256')
      id.update(data.date)
      id.update(data.concept)
      id.update(data.movement)
      id.update(data.amount)
      id.update(data.notes)
      return {
        type: parseFloat(data.amount) > 0 ? 'income' : 'expense',
        date: new Date(data.date),
        concept: data.concept,
        movement: data.movement,
        amount: parseFloat(data.amount),
        notes: data.notes,
        id: id.digest('base64'),
      }
    })
  return res.status(200).json(financeTransactions)
}
