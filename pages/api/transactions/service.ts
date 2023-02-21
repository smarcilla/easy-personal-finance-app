import EasyFinance, {
  TransactionEntityFilter,
  UniqueEntityArray,
} from 'easy-personal-finance'
import { FinanceTransactionEntity } from 'easy-personal-finance/lib/entities'
import { TransactionData } from 'easy-personal-finance/lib/types/transactions.type'

export class TransactionService {
  constructor(
    private readonly easyFinance: EasyFinance,
    private readonly transactionEntityFilter: TransactionEntityFilter,
    private transactions: FinanceTransactionEntity[] = [],
  ) {}

  addTransactions(data: TransactionData) {
    const newTransactions = this.easyFinance.transactions
      .withType('form-data')
      .withData(data)
      .build()
      .find()

    this.transactions = new UniqueEntityArray([
      ...this.transactions,
      ...newTransactions,
    ]).items
  }

  find(searchText: string | undefined) {
    return new UniqueEntityArray(this.transactions).items.filter((data) =>
      this.transactionEntityFilter.filter(data, searchText),
    )
  }
}
