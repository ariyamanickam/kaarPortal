import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.scss']
})
export class SalesDetailComponent implements OnInit {

  SalesDetail: any;
  SalesDetailresult: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customerService.getSalesDetail().subscribe((data) => {
      this.SalesDetail = data;

      this.SalesDetailresult = this.SalesDetail['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_SALES_STATUS_AM.Response'][0]['IT_SALES_STATUS'][0]['item']
      console.log("Salesdetail", this.SalesDetailresult);

    })
  }

}
