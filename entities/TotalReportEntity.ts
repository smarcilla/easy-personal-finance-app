import { BalanceReportEntity } from 'easy-personal-finance/lib/reports'

export interface TotalReportEntity {
  balance: BalanceReportEntity
  incomesByConcept: { description: string; amount: number }[]
  incomesByMovement: { description: string; amount: number }[]
  incomesByNotes: { description: string; amount: number }[]
  expensesByConcept: { description: string; amount: number }[]
  expensesByMovement: { description: string; amount: number }[]
  expensesByNotes: { description: string; amount: number }[]
}
