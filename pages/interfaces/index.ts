export interface FinanceTransaction {
  type: 'income' | 'expense',
  date: Date, concept:string, movement:string, amount:number, notes:string, id:string
}
