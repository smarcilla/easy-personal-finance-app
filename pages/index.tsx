import useSWR from 'swr'
import { FinanceTransaction } from './interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error, isLoading } = useSWR<FinanceTransaction[]>('/api/finance', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <ul>
      {data.map((ft:FinanceTransaction) => (
        <li key={ft.type}>{ft.type}</li>
      ))}
    </ul>
  )
}