import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  pageTitle:string ='List of Customers';
  showList: boolean = false;
  customers: any[]=
  [
    {
        "customerId": 1,
        "customerName": 'Sheetal Pandey',
        "accountNumber": '1234565790'
    },
    {
        "customerId": 2,
        "customerName": 'Komal Kaur',
        "accountNumber": '1456784582'
    },
    {
        "customerId": 3,
        "customerName": 'Alex Swift',
        "accountNumber": '1674325799'
    },
    {
        "customerId": 4,
        "customerName": 'John Meyer',
        "accountNumber": '1054789347'
    }
];
  toggleList(): void{
    this.showList= !this.showList;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
