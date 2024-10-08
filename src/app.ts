import {CompanyAccount} from  './class/companyAccount';
import {PeopleAccount}  from  './class/peopleAccount';

const novaCompany = new  CompanyAccount('Effect', 1);
console.log(novaCompany);

const novoPeople = new PeopleAccount('Natanael', 1, 1234);
console.log(novoPeople);
novoPeople.setName('Natanael santos Campos');
novoPeople.getBalance();
console.log(novoPeople);
console.log(novoPeople.getName());