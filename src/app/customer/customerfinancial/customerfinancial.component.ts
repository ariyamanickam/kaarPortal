import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customerfinancial',
  templateUrl: './customerfinancial.component.html',
  styleUrls: ['./customerfinancial.component.scss']
})
export class CustomerfinancialComponent implements OnInit {
  Paymentageinglist: any;
  Paymentageinglistresults: any;
  Creditlist : any;
  Creditlistresults : any;
  Debitlist : any;
  Debitlistresults: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customerService.getPaymentageing().subscribe((data) => {
      this.Paymentageinglist = data;
     
      this.Paymentageinglistresults = this.Paymentageinglist[0]['item']
      console.log("Paymentageing",this.Paymentageinglistresults);
    })
    this.customerService.getCredit().subscribe((data) => {
      this.Creditlist = data;
     
      this.Creditlistresults = this.Creditlist[0]['item']
      console.log("Credit",this.Creditlistresults);
    })
    this.customerService.getDebit().subscribe((data) => {
      this.Debitlist = data;
     
      this.Debitlistresults = this.Debitlist[0]['item']
      console.log("Debit",this.Debitlistresults);
    })
  }

}
