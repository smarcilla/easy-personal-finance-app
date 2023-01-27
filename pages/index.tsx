import useSWR from 'swr'
import Link from 'next/link'
import { FinanceTransaction } from './interfaces'
import FinancialTransaction from './FinancialTransaction'

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
      <div className="text-3xl text-center">
        <p>Easy Personal Finance App</p>
      </div>

      <div className="bg-gray-100">
        <nav className="bg-gray-800 p-6">
          <Link href="/" className="text-white font-medium">
            Home
          </Link>
          <Link
            href="/TransactionFilter"
            className="text-white font-medium ml-6"
          >
            Filtered
          </Link>
          <a href="#" className="text-white font-medium ml-6">
            Settings
          </a>
          <Link href="/UploadFiles" className="text-white font-medium ml-6">
            Upload
          </Link>
        </nav>
      </div>

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
        {data.map((ft: FinanceTransaction) => (
          <div key={ft.id} className="col-span-1 md:col-span-1 lg:col-span-5">
            <FinancialTransaction transaction={ft} />
          </div>
        ))}
      </div>
    </>
  )
}
