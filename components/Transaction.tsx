import { FinanceTransactionEntity } from 'easy-personal-finance/lib/entities'

type TransactionProps = {
  transaction: FinanceTransactionEntity
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  return (
    <div className="bg-slate-150">
      <div className="flex shadow">
        <div className="w-1/5 py-4 px-6">
          {transaction.date
            ?.toString()
            .substring(0, transaction.date.toString().length - 14)}
        </div>
        <div className="w-1/5 py-4 px-6">{transaction.concept}</div>
        <div className="w-1/5 py-4 px-6">{transaction.movement}</div>
        <div className="w-1/5 py-4 px-6">{transaction.amount}</div>
        <div className="w-1/5 py-4 px-6">{transaction.notes}</div>
      </div>
    </div>
  )
}

export default Transaction