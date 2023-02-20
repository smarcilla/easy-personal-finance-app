import { BalanceReportEntity } from 'easy-personal-finance/lib/reports'
import { NextApiRequest, NextApiResponse } from 'next'
import { ReportModule } from './module'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BalanceReportEntity>,
) {
  const reportController = new ReportModule().controller

  const reportData = await reportController.getBalance()

  return res.status(200).json(reportData)
}
