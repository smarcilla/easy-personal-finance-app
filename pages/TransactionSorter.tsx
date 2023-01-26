import React, { useState } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import { FinanceTransaction } from './interfaces'

const TransactionSorter = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  const { data } = useSWR<FinanceTransaction[]>('/api/finance', fetcher)

  const [selectedOption, setSelectedOption] = useState<string>('month')

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <>
      <div className="bg-gray-100">
        <nav className="bg-gray-800 p-6 flex justify-between items-center">
          <Link href="/" className="text-white font-medium">
            Home
          </Link>
          <div className="relative">
            <select
              id="topic"
              name="topic"
              className="block appearance-none w-full p-2 rounded-md bg-gray-200 text-gray-700 border-gray-400 border focus:outline-none"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="month">Month</option>
              <option value="concept">Concept</option>
              <option value="movement">Movement</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </nav>

        <div className="mt-3">
          {data?.map((item) => (
            <li className="list-none text-left px-8 py-2" key={item.id}>
              {selectedOption === 'month'
                ? item.date?.toString()
                : selectedOption === 'concept'
                ? item.concept
                : selectedOption === 'movement'
                ? item.movement
                : ''}
            </li>
          ))}
        </div>
      </div>
    </>
  )
}

export default TransactionSorter
