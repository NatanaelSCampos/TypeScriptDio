export abstract class DioAccount  {
    private name: string
    private accountNumber: number
    private balance: number = 0

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string =>  {
        return this.name;
    }
    setName = (name: string): void => {
        this.name = name
        console.log("nome alterado com sucesso")
    }

    deposit = (): void => {
        console.log('Você depositou.')
    }
    withDraw = (): void => {
        console.log('Você sacou.')
    }
    getBalance = (): void => {
        console.log(`Seu saldo é de R$ ${this.balance}.`)
    }

}