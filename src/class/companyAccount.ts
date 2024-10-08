import {DioAccount} from "./dioAccount"

export class CompanyAccount extends  DioAccount {
    constructor(name:string, accountNamber: number) {
        super(name, accountNamber)
    }

    getLoan = () => {
        console.log('Company account get loan');
    }
    deposit = (): void => {
        console.log('A empresa depositou')
    };
}
