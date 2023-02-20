import { FinanceTransactionEntity } from 'easy-personal-finance/lib/entities'
import Transaction from '../Transaction'
import filteredData from './TransactionsSearcher'

type TransactionListProps = {
  transactions: FinanceTransactionEntity[]
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <>
      <div className="grid grid-cols-5  p-6 md:grid-cols-5 lg:grid-cols-5">
        <div className="text-center col-span-1 md:col-span-1 lg:col-span-1 py-4 px-6 bg-gray-200  rounded-tl text-base sx:text-sx sm:text-sm lg:text-base">
          Date
        </div>
        <div className="text-center col-span-1 md:col-span-1 lg:col-span-1 py-4 px-6 bg-gray-200 text-base sx:text-sx sm:text-sm lg:text-base">
          Concept
        </div>
        <div className="text-center col-span-1 md:col-span-1 lg:col-span-1 py-4 px-6 bg-gray-200 text-base sx:text-sx sm:text-sm lg:text-base">
          Movement
        </div>
        <div className="text-center col-span-1 md:col-span-1 lg:col-span-1 py-4 px-6 bg-gray-200 text-base sx:text-sx sm:text-sm lg:text-base">
          Amount
        </div>
        <div className="text-center col-span-1 md:col-span-1 lg:col-span-1 py-4 px-6 bg-gray-200  rounded-tr text-base sx:text-sx sm:text-sm lg:text-base">
          Notes
        </div>
      </div>

      {transactions.map((transaction) => (
        <div
          key={`${transaction.date}-${transaction.concept}`}
          className="col-span-1 md:col-span-1 lg:col-span-5"
        >
          <Transaction transaction={transaction} />
        </div>
      ))}
    </>
  )
}

export default TransactionList
