
const FinancialTransaction = ({ transaction }) => {
  return (
    <div className="border border-black">
      <div className="flex">
        <div className="border-solid border-black p-4 flex-1">{transaction.date}</div>
        <div className="border-solid border-black p-4 flex-1">{transaction.concept}</div>
        <div className="border-solid border-black p-4 flex-1">{transaction.movement}</div>
        <div className="border-solid border-black p-4 flex-1">{transaction.amount}</div>
        <div className="border-solid border-black p-4 flex-1">{transaction.notes}</div>
      </div>
    </div>
  );
};

export default FinancialTransaction;

