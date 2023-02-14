import { useState, useEffect, SetStateAction, Dispatch } from 'react'
import Link from 'next/link'

type TransactionSearcherProps = {
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
}
const TransactionSearcher: React.FC<TransactionSearcherProps> = ({
  searchText,
  setSearchText,
}) => {
  const handleChange = (e: any) => {
    const value = e.target.value
    setSearchText(value)
  }

  return (
    <>
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
            onChange={handleChange}
            value={searchText}
          />
        </div>
      </nav>
    </>
  )
}

export default TransactionSearcher
