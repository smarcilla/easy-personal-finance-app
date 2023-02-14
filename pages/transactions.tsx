import useSWR from 'swr'
import { data } from './data/finance-transactions.json'
import { EasyFinance } from 'easy-personal-finance'
import Link from 'next/link'
import { FinanceTransactionEntity } from '@/../easy-personal-finance/lib/entities'
import TransactionList from '@/components/TransactionComponents/TransactionList'
import TransactionSearcher from '@/components/TransactionComponents/TransactionsSearcher'

type TransactionsProps = {
  transactions: FinanceTransactionEntity[]
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Transactions: React.FC<TransactionsProps> = () => {
  const { data, error, isLoading } = useSWR<FinanceTransactionEntity[]>(
    '/api/transactions',
    fetcher,
  )

  if (error)
    return <div className="text-3xl font-bold underline">Failed to load</div>
  if (isLoading)
    return <div className="text-3xl font-bold underline">Loading...</div>
  if (!data) return null

  return (
    <div>
      <TransactionSearcher text="" />
      <TransactionList transactions={data} />
    </div>
  )
}

export default Transactions
