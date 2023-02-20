import useSWR from 'swr'
import Link from 'next/link'

import BalanceReport from '@/components/BalanceReport'
import { FinanceTransactionEntity } from '@/../easy-personal-finance/lib/entities'
import { BalanceReportEntity } from '@/../easy-personal-finance/lib/reports'
import { useEffect } from 'react'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Reports() {
  const { data, error, isLoading } = useSWR<BalanceReportEntity>(
    '/api/reports',
    fetcher,
  )

  if (error)
    return <div className="text-3xl font-bold underline">Failed to load</div>

  if (isLoading)
    return <div className="text-3xl font-bold underline">Loading...</div>

  if (!data) return null

  return (
    <>
      <nav className="bg-gray-800 p-6">
        <Link href="/" className="text-white font-medium">
          Home
        </Link>
        <Link href="/transactions" className="text-white font-medium ml-6">
          Transaction Sorter
        </Link>
      </nav>
      <div className="text-3xl text-center">
        <p>Easy Personal Finance App</p>
        <BalanceReport report={data} />
      </div>
    </>
  )
}
