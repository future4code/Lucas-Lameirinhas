type Transaction = {
    value: number,
    date: Date,
    description: string
}

type Account = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance:number, 
    statement: Array<Transaction>
}

export const Accounts: Account [] = []