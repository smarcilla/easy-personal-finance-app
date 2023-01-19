import useSWR from 'swr'
import { FinanceTransaction } from './interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error, isLoading } = useSWR<FinanceTransaction[]>(
    '/api/finance',
    fetcher,
  )

  if (error)
    return <div className="text-3xl font-bold underline">Failed to load</div>
  if (isLoading)
    return <div className="text-3xl font-bold underline">Loading...</div>
  if (!data) return null

  return (
    <>
      <div className="text-3xl font-bold text-center">
        Easy Personal Finance App
      </div>
      <ul className="text-center">
        {data.map((ft: FinanceTransaction) => (
          <li key={ft.id}>
            {ft.type} - {ft.id} - {ft.amount}
          </li>
        ))}
      </ul>
    </>
  )
}
