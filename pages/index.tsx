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
        <br></br>
        <table className='w-full'>
        <thead className="bg-gray-200 text-gray-700 text-sm font-medium uppercase tracking-wider text-center border-b border-gray-300">
        <tr >
        <th>Date</th>
        <th>Concept</th>
        <th>Movement</th>
        <th>Amount</th>
        <th>Type</th>
        <th>Notes</th>
        </tr>
        </thead>
        </table>

         <ul className='text-center'>
                 {data.map((ft:FinanceTransaction) => (
                         <li key={ft.id}>
                        <FinancialTransaction transaction={ft}/>
                        </li>
                ))}
        </ul>
       </>
    )
}
