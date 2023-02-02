import { NextApiResponse, NextApiRequest } from 'next'
import { EasyFinance } from 'easy-personal-finance'
import { FinanceTransaction } from '@/pages/interfaces'
import financeData from './data/finance-transactions.json'
import crypto from 'crypto'
import {FinanceDataConverter} from '../../../lib/index'

//https://github.com/vercel/next.js/blob/canary/examples/api-routes/pages/api/people/index.ts
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<FinanceTransaction[]>,
) {
  if(_req.method==='POST'){
    console.log(_req.body)   
    console.log(JSON.parse(_req.body).url)
    console.log(_req.body["url"])       
     console.log(new FinanceDataConverter(JSON.parse(_req.body).url).convert())
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
