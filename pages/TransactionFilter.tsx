import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const TransactionFilter = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [filter, setFilter] = useState('')
  const [filteredData, setFilteredData] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('/api/finance')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setFilteredData(data)
        setLoading(false)
      })
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    setFilter(value)
    if (!value) {
      setFilteredData(data)
    } else {
      setFilteredData(
        data.filter((item) => {
          return (
            item.concept.toLowerCase().includes(value.toLowerCase()) ||
            item.date?.toLowerCase().includes(value.toLowerCase()) ||
            item.movement.toLowerCase().includes(value.toLowerCase())
          )
        }),
      )
    }
  }

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  if (!filteredData) return <p>No profile data</p>

  return (
    <div>
      <nav className="bg-gray-800 p-3 flex justify-center items-center">
        <Link
          href="/"
          className="text-white mt-4 font-medium w-1/4 flex-initial"
        >
          Home
        </Link>
        <div className="w-3/4 p-3 flex-initial">
          <input
            className="bg-dark text-light border-0 mt-4 text-center placeholder-gray-500 rounded-md py-2 pr-4 pl-10 block w-full appearance-none leading-normal"
            type="text"
            placeholder="Search your transaction"
            autoFocus
            onChange={handleChange}
            value={filter}
          />
        </div>
      </nav>
      <div>
        {filteredData.map((item) => {
          return (
            <div className="py-4 px-6 bg-gray-200 font-medium" key={item.id}>
              <p>
                <span className="font-bold">Date:</span>{' '}
                {item.date
                  ?.toString()
                  .substring(0, item.date.toString().length - 14)}
              </p>
              <p>
                <span className="font-bold">Concept:</span>
                <span> {item.concept}</span>
                <span className="ml-2">{item.amount}</span>
              </p>
              <p>
                <span className="font-bold">Movement:</span> {item.movement}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TransactionFilter
