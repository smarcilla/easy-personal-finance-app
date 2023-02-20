import { FinanceTransactionEntity } from 'easy-personal-finance/lib/entities'

type TransactionProps = {
  transaction: FinanceTransactionEntity
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  return (
    <div className="bg-slate-150 py-4 px-6">
      <div className="flex py-4 text-center text-base sx:text-sx sm:text-sm lg:text-base shadow-inner rounded-tl-lg rounded-tr-lg">
        <div className="w-1/5 py-4 px-6">
          {transaction.date
            ?.toString()
            .substring(0, transaction.date.toString().length - 14)}
        </div>
        <div className="w-1/5  py-4 px-6">{transaction.concept}</div>
        <div className="w-1/5  py-4 px-6">{transaction.movement}</div>
        <div className="w-1/5  py-4 px-6">{transaction.amount}</div>
        <div className="w-1/5  py-4 px-6">
          {transaction.notes
            ?.toLowerCase()
            .replace(/^\w/, (c) => c.toUpperCase())}
        </div>
      </div>
    </div>
  )
}

export default Transaction
