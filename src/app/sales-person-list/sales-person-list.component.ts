import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Ganesh", "Nitta", "ganesh@gmail.com", 5000),
    new SalesPerson("Santosh", "Nitta", "santosh@gmail.com", 4000),
    new SalesPerson("Nani", "krovi", "nani@gmail.com", 6000),
    new SalesPerson("pavan", "kumar", "pavan@gmail.com", 7000)
  ];
  constructor() { }

  ngOnInit() {

  }

}
