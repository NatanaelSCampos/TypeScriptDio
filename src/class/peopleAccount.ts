import { DioAccount } from "./dioAccount";

export class PeopleAccount extends  DioAccount {
    doc_id: number;
    constructor(name: string, accountNamber: number, doc_id: number) {
        super(name, accountNamber);
        this.doc_id = doc_id;
    };
};
