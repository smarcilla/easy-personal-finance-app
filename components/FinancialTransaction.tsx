import React from 'react'

interface Props {
  transaction: {
    date: Date
    concept: string
    movement: string
    amount: number
    notes: string
  }
}

const FinancialTransaction: React.FC<Props> = ({ transaction }) => {
  return (
    <div className="bg-slate-150">
      <div className="flex shadow">
        <div className="w-1/5 py-4 px-6">{transaction.date?.toString()}</div>
        <div className="w-1/5 py-4 px-6">{transaction.concept}</div>
        <div className="w-1/5 py-4 px-6">{transaction.movement}</div>
        <div className="w-1/5 py-4 px-6">{transaction.amount}</div>
        <div className="w-1/5 py-4 px-6">{transaction.notes}</div>
      </div>
    </div>
  )
}

export default FinancialTransaction
