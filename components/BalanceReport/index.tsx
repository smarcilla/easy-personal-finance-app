import { BalanceReportEntity } from 'easy-personal-finance/lib/reports'

type BalanceReportProps = {
  report: BalanceReportEntity
}
const BalanceReport: React.FC<BalanceReportProps> = ({ report }) => {
  return (
    <div>
      <h2>Result Report</h2>
      <h3>Incomes: {report.totalIncomes}</h3>
      <h3>Expenses: {report.totalExpenses}</h3>
      <h3>Balance: {report.totalBalance}</h3>
    </div>
  )
}

export default BalanceReport
