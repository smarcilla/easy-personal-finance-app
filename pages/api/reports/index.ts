import { BalanceReportEntity } from 'easy-personal-finance/lib/reports'
import { NextApiRequest, NextApiResponse } from 'next'
import { ReportModule } from './module'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    balance: BalanceReportEntity
    incomesByConcept: Map<string, number>
    incomesByMovement: Map<string, number>
    incomesByNotes: Map<string, number>
    expensesByConcept: Map<string, number>
    expensesByMovement: Map<string, number>
    expensesByNotes: Map<string, number>
  }>,
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

  console.info(response);

  return res.status(200).json(response)
}
