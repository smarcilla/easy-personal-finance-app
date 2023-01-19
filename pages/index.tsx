import useSWR from 'swr'
import { FinanceTransaction } from './interfaces'
import FinancialTransaction from './FinancialTransaction'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error, isLoading } = useSWR<FinanceTransaction[]>(
    '/api/finance',
    fetcher,
  )

  if (error) return <div className="text-3xl font-bold underline">Failed to load</div>
  if (isLoading) return <div className="text-3xl font-bold underline">Loading...</div>
  if (!data) return null

  return (
        <>
        <div className="text-3xl font-bold text-center">Easy Personal Finance App</div>
        <br/>
        <div className="bg-gray-200 text-gray-700 text-sm font-medium uppercase tracking-wider text-center border-b border-gray-300">
        <div className="flex flex-wrap items-center justify-between">
        <div className="w-1/5 p-2">Date</div>
        <div className="w-1/5 p-2">Concept</div>
        <div className="w-1/5 p-2">Movement</div>
        <div className="w-1/5 p-2">Amount</div>
        <div className="w-1/5 p-2">Notes</div>
</div>

        
        </div>

         <ul className='text-center'>
                 {data.map((ft:FinanceTransaction) => (
                         <li key={ft.id}>
                        <FinancialTransaction transaction={{ date: ft.date, concept: ft.concept,movement: ft.movement,amount: ft.amount, notes: ft.notes}} />
                        </li>
                ))}
        </ul>
       </>
    )
}
