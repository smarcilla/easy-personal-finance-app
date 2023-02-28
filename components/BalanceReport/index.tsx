import { TotalReportEntity } from '@/entities/TotalReportEntity'

type BalanceReportProps = {
  report: TotalReportEntity
}
const BalanceReport: React.FC<BalanceReportProps> = ({ report }) => {
  return (
    <div className="mx-20">
      <div className="grid grid-cols-2 mt-5 mb-20 gap-2 bg-gray-200 py-2 px-4 rounded-tl-lg rounded-tr-lg">
        <div className="font-bold text-base text-center mt-2">
          Total Incomes :
        </div>
        <div className="text-center bg-green-100">
          {report.balance.totalIncomes}
        </div>
        <div className="font-bold text-base text-center mt-2">
          Total Expenses :
        </div>
        <div className="text-center  bg-red-100">
          {report.balance.totalExpenses}
        </div>
        <div className="font-bold text-base text-center mt-2">Balance :</div>
        <div className="text-center bg-orange-100">
          {report.balance.totalExpenses}
        </div>
      </div>

      <section className="grid grid-cols-2 mt-20 px-4 py-6">
        <div className="">
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tl-lg">
            Income by concept
          </div>
          <div className="grid grid-cols-2 py-6 bg-green-100">
            <div className="font-bold text-base">Incomes</div>
            <div className="font-bold text-base">Total Incomes</div>
          </div>
          <ul className="text-base bg-green-100">
            {report.incomesByConcept.map(({ description, amount }) => (
              <li key={description} className="flex space-x-4 p-1 shadow-inner">
                <span className="w-1/2">{description}</span>
                <span className="w-1/2">{amount}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tr-lg">
            Expenses by concept
          </div>
          <div className="grid grid-cols-2 py-6  bg-red-100">
            <div className="font-bold text-base">Expenses</div>
            <div className="font-bold text-base">Total Expenses</div>
          </div>
          <ul className="text-base  bg-red-100">
            {report.expensesByConcept.map(({ description, amount }) => (
              <li key={description} className="flex space-x-4 p-1 shadow-inner">
                <span className="w-1/2">{description}</span>
                <span className="w-1/2">{amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-2 mt-20 px-4 py-6">
        <div className="">
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tl-lg">
            Income per movement
          </div>
          <div className="grid grid-cols-2 py-6 bg-green-100">
            <div className="font-bold text-base">Incomes</div>
            <div className="font-bold text-base">Total Incomes</div>
          </div>
          <ul className="text-base bg-green-100">
            {report.incomesByMovement.map(({ description, amount }) => (
              <li key={description} className="flex space-x-4 p-1 shadow-inner">
                <span className="w-1/2">{description}</span>
                <span className="w-1/2">{amount}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tr-lg">
            Expenses per movement
          </div>
          <div className="grid grid-cols-2 py-6  bg-red-100">
            <div className="font-bold text-base">Expenses</div>
            <div className="font-bold text-base">Total Expenses</div>
          </div>
          <ul className="text-base  bg-red-100">
            {report.expensesByMovement.map(({ description, amount }) => (
              <li key={description} className="flex space-x-4 p-1 shadow-inner">
                <span className="w-1/2">{description}</span>
                <span className="w-1/2">{amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-2 mt-20 px-4 py-6">
        <div className="">
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tl-lg">
            Income per note
          </div>
          <div className="grid grid-cols-2 py-6 bg-green-100">
            <div className="font-bold text-base">Incomes</div>
            <div className="font-bold text-base">Total Incomes</div>
          </div>
          <ul className="text-base bg-green-100">
            {report.incomesByNotes.map(({ description, amount }) => (
              <li key={description} className="flex space-x-4 p-1 shadow-inner">
                <span className="w-1/2">{description}</span>
                <span className="w-1/2">{amount}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tr-lg">
            Expenses per note
          </div>
          <div className="grid grid-cols-2 py-6  bg-red-100">
            <div className="font-bold text-base">Expenses</div>
            <div className="font-bold text-base">Total Expenses</div>
          </div>
          <ul className="text-base  bg-red-100">
            {report.expensesByNotes.map(({ description, amount }) => (
              <li key={description} className="flex space-x-4 p-1 shadow-inner">
                <span className="w-1/2">{description}</span>
                <span className="w-1/2">{amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default BalanceReport
