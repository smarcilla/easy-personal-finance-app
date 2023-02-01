import useSWR from 'swr'
import Link from 'next/link'
import { FinanceTransaction } from './interfaces'
import FinancialTransaction from '../components/FinancialTransaction'
import DropZone from '../components/DropZone'
import React, { useReducer } from 'react'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const reduce = (state, action) => {
    switch (action.type) {
      case 'SET_IN_DROP_ZONE':
        return { ...state, inDropZone: action.inDropZone }
      case 'ADD_FILE_TO_LIST':
        return { ...state, fileList: state.fileList.concat(action.files) }
      default:
        return state
    }
  }

  // destructuring state and dispatch, initializing fileList to empty array
  const [dataReducer, dispatch] = useReducer(reduce, {
    inDropZone: false,
    fileList: [],
  })

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
          <Link href="/transactions" className="text-white font-medium ml-6">
            Transaction Sorter
          </Link>
          <Link href="/reports" className="text-white font-medium ml-6">
            Reports
          </Link>
        </nav>
      </div>
      <section className="py-3 px-5">
        <p className="py-3 px-5">
          Budgeting is an essential part of financial management and with the
          advent of technology, budgeting has never been easier. The budgeting
          application is a powerful tool that helps you keep track of your
          income, expenses and savings. It has beautiful qualities that make
          budgeting effortless and fun.
        </p>
      </section>
      <h1 className="text-xl text-center font-bold">
        Drag And Drop File Upload
      </h1>
      <DropZone data={dataReducer} dispatch={dispatch} />
      <section className="py-3 px-5">
        <p className="py-3 px-5">
          The first and foremost quality of the budgeting application is its
          simplicity. It is designed to be user-friendly and easy to understand,
          so even those who are new to budgeting can get started quickly. It
          features a clear and straightforward interface that makes it easy to
          categorize and track your expenses, set budgets and keep track of your
          income.
        </p>
        <p className="py-3 px-5">
          Finally, the budgeting application is visually stunning. The app is
          designed with stunning graphics, colorful charts, and intuitive
          interfaces that make budgeting fun and engaging. The visuals help you
          understand your financial status at a glance, and you can see your
          progress over time, which can be incredibly motivating.
        </p>
        <p className="py-3 px-5">
          In conclusion, the budgeting application is a beautiful tool that is
          designed to help you manage your finances with ease and confidence.
          With its simplicity, customization, and visual appeal, the budgeting
          application is an essential tool for anyone looking to get a handle on
          their finances.
        </p>
      </section>
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
