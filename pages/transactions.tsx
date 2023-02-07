import { data } from './data/finance-transactions.json'
import { EasyFinance } from 'easy-personal-finance'
import Link from 'next/link'

//components
type TransactionSearcherProps = {
  text: string
}
const TransactionSearcher: React.FC<TransactionSearcherProps> = ({ text }) => {
  return (
    <>
      <div className="text-3xl text-center">
        <p>Easy Personal Finance App</p>
      </div>

      <nav className="bg-gray-800 p-6 flex">
        <Link href="/" className="text-white  font-medium ml-6">
          Home
        </Link>
        <Link href="/reports" className="text-white font-medium ml-6">
          Reports
        </Link>
        <div className="ml-24"></div>

        <div className="w-3/4  flex-initial">
          <input
            className="bg-dark text-light border-0 text-center placeholder-gray-500 rounded-md ml-6 block w-full appearance-none leading-normal"
            type="text"
            placeholder="Search your transaction"
            autoFocus
            /*     onChange={handleChange}*/
            value={text}
          />
        </div>
      </nav>
    </>
  )
}

type TransactionProps = {
  transaction: FinanceTransactionEntity
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  return (
    <div className="bg-slate-150">
      <div className="flex shadow">
        <div className="w-1/5 py-4 px-6">{transaction.date?.toString()}</div>
        <div className="w-1/5 py-4 px-6">{transaction.concept}</div>
        <div className="w-1/5 py-4 px-6">{transaction.movement}</div>
        <div className="w-1/5 py-4 px-6">{transaction.amount}</div>
        <div className="w-1/5 py-4 px-6">{transaction.notes}</div>
      </div>
    </div>
  )
}

type TransactionListProps = {
  transactions: FinanceTransactionEntity[]
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="grid grid-cols-1 p-6 md:grid-cols-4 lg:grid-cols-5">
      <div className="col-span-1 md:col-span-1 lg:col-span-1 py-4 px-6 bg-gray-200 font-medium rounded-tl">
        Date
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1 py-4 px-6 bg-gray-200 font-medium">
        Concept
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1 py-4 px-6 bg-gray-200 font-medium">
        Movement
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1 py-4 px-6 bg-gray-200 font-medium">
        Amount
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1 py-4 px-6 bg-gray-200 font-medium rounded-tr">
        Notes
      </div>
      {transactions.map((transaction) => (
        <div
          key={`${transaction.date}-${transaction.concept}`}
          className="col-span-1 md:col-span-1 lg:col-span-5"
        >
          <Transaction transaction={transaction} />
        </div>
      ))}
    </div>
  )
}

type TransactionsProps = {
  transactions: FinanceTransactionEntity[]
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  return (
    <div>
      <TransactionSearcher text="" />
      <TransactionList transactions={transactions} />
    </div>
  )
}

export default Transactions

export async function getStaticProps() {
  const transactions = new EasyFinance().transactions
    .withOrigin('memory')
    .withData(data)
    .build()
    .find()

  return {
    props: {
      transactions: JSON.parse(JSON.stringify(transactions)),
    },
  }
}
