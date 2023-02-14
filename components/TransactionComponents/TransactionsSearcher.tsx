import { useState, useEffect } from 'react'
import Link from 'next/link'

type TransactionSearcherProps = {
  text: string
}
const TransactionSearcher: React.FC<TransactionSearcherProps> = ({ text }) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [filter, setFilter] = useState('')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setFilteredData(data)
        setLoading(false)
      })
  }, [])

  const handleChange = (e: any) => {
    const value = e.target.value
    setFilter(value)
    if (!value) {
      setFilteredData(data)
    } else {
      setFilteredData(
        data.filter((item: any) => {
          const amountString = item.amount.toString()
          return (
            item.concept.toLowerCase().includes(value.toLowerCase()) ||
            item.movement.toLowerCase().includes(value.toLowerCase()) ||
            amountString.toLowerCase().includes(value.toLowerCase()) ||
            item.notes.toLowerCase().includes(value.toLowerCase())
          )
        }),
      )
    }
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
            value={filter}
          />
        </div>
      </nav>
      <div className="text-3xl text-center">
        <p>Easy Personal Finance App</p>
      </div>
      {filter !== '' && (
        <>
          {filteredData.map((item) => {
            return (
              <div
                className="grid grid-cols-5 gap-4 p-4 text-center"
                key={item.id}
              >
                <div className="col-span-1">
                  {item.date
                    ?.toString()
                    .substring(0, item.date.toString().length - 14)}
                </div>
                <div className="col-span-1">{item.concept}</div>
                <div className="col-span-1">{item.movement}</div>
                <div className="col-span-1">{item.amount}</div>
                <div className="col-span-1">{item.notes}</div>
              </div>
            )
          })}
        </>
      )}
      {filter === '' && (
        <p className="text-center text-gray-500">No searches</p>
      )}
    </>
  )
}

export default TransactionSearcher
