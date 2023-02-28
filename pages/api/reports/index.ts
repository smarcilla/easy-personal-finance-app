import { TotalReportEntity } from '@/entities/TotalReportEntity'
import { BalanceReportEntity } from 'easy-personal-finance/lib/reports'
import { NextApiRequest, NextApiResponse } from 'next'
import { ReportModule } from './module'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TotalReportEntity>,
) {
  const reportController = new ReportModule().controller

  const response = {
    balance: await reportController.getBalance(),
    incomesByConcept: await reportController.getIncomesByConcept(),
    incomesByMovement: await reportController.getIncomesByMovement(),
    incomesByNotes: await reportController.getIncomesByNotes(),
    expensesByConcept: await reportController.getExpensesByConcept(),
    expensesByMovement: await reportController.getExpensesByMovement(),
    expensesByNotes: await reportController.getExpensesByNotes(),
  }

  console.info(response)

  return res.status(200).json(response)
}
