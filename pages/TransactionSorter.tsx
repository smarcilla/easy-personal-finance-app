import React from 'react'
import Link from 'next/link'

function TransactionSorter() {
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
            >
              <option value="concept">Concept</option>
              <option value="movement">Movement</option>
              <option value="month">Month</option>
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
      </div>
    </>
  )
}

export default TransactionSorter
