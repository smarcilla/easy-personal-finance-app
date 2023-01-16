import { NextApiResponse, NextApiRequest } from 'next'
import { EasyFinance } from 'easy-personal-finance'
import { FinanceTransaction } from '@/pages/interfaces'

//https://github.com/vercel/next.js/blob/canary/examples/api-routes/pages/api/people/index.ts
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<FinanceTransaction[]>
) {
    const easyFinance = new EasyFinance()
    console.log(easyFinance)
  return res.status(200).json([{type:'income'}])
}