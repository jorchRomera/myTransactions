export interface Transaction {
    id: number,
    type: TransactionType,
    amount: number,
    date: number,
}

enum TransactionType {
    credit = 'credit',
    debit = 'debit',
}
