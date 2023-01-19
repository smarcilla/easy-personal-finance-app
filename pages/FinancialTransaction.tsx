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
    <div className="border border-black">
      <div className="flex">
        <div className="border-solid border-black w-1/5 p-2">
          {transaction.date}
        </div>
        <div className="border-solid border-black w-1/5 p-2">
          {transaction.concept}
        </div>
        <div className="border-solid border-black w-1/5 p-2">
          {transaction.movement}
        </div>
        <div className="border-solid border-black w-1/5 p-2">
          {transaction.amount}
        </div>
        <div className="border-solid border-black w-1/5 p-2">
          {transaction.notes}
        </div>
      </div>
    </div>
  )
}

export default FinancialTransaction
