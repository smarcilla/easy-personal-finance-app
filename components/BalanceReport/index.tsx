import { BalanceReportEntity } from 'easy-personal-finance/lib/reports'

type BalanceReportProps = {
  report: BalanceReportEntity
}
const BalanceReport: React.FC<BalanceReportProps> = ({ report }) => {
  return (
    <div className="mx-20">
      <div className="grid grid-cols-2 mt-5 mb-20 gap-2 bg-gray-200 py-2 px-4 rounded-tl-lg rounded-tr-lg">
        <div className="font-bold text-base text-center mt-2">
          Total Incomes :
        </div>
        <div className="text-center bg-green-100">{report.totalIncomes}0</div>
        <div className="font-bold text-base text-center mt-2">
          Total Expenses :
        </div>
        <div className="text-center  bg-red-100">{report.totalExpenses}0</div>
        <div className="font-bold text-base text-center mt-2">Balance :</div>
        <div className="text-center bg-orange-100">{report.totalExpenses}0</div>
      </div>

      <section className="grid grid-cols-2 mt-20 px-4 py-6">
        <div className="">
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tl-lg">
            Income by concept
          </div>
          <div className="grid grid-cols-2 py-6 bg-green-100">
            <div className="font-bold text-base">Incomes</div>
            <div className="font-bold text-base">TOTAL Incomes</div>
            {/* Concept - Incomes*/}
          </div>
        </div>

        <div>
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tr-lg">
            Expenses by concept
          </div>
          <div className="grid grid-cols-2 py-6 bg-red-100">
            <div className="font-bold text-base">Expenses</div>
            <div className="font-bold text-base">TOTAL Expenses</div>
            {/* Concept - Expenses*/}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 mt-20 px-4 py-6">
        <div>
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tl-lg">
            Income per transaction
          </div>
          <div className="grid grid-cols-2 py-6  bg-green-100">
            <div className="font-bold text-base">Incomes</div>
            <div className="font-bold text-base rounded-tr-lg">
              TOTAL Incomes
            </div>
            {/* Transaction - Incomes*/}
          </div>
        </div>

        <div>
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tr-lg">
            Expenses per transaction
          </div>
          <div className="grid grid-cols-2 py-6  bg-red-100">
            <div className="font-bold text-base">Expenses</div>
            <div className="font-bold text-base">TOTAL Expenses</div>
            {/* Transaction - Expenses*/}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 mt-20 px-4 py-6">
        <div>
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tl-lg">
            Income per note
          </div>
          <div className="grid grid-cols-2 py-6  bg-green-100">
            <div className="font-bold text-base">Incomes</div>
            <div className="font-bold text-base">TOTAL Incomes</div>
            {/* Transaction - Incomes*/}
          </div>
        </div>

        <div>
          <div className="bg-gray-200 font-bold text-base py-3 rounded-tr-lg">
            Expenses per note
          </div>
          <div className="grid grid-cols-2 py-6  bg-red-100">
            <div className="font-bold text-base">Expenses</div>
            <div className="font-bold text-base">TOTAL Expenses</div>
            {/* Transaction - Expenses*/}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BalanceReport
