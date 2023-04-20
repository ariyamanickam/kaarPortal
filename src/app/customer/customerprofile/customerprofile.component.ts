import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { formatDate } from '@angular/common';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.scss']
})
export class CustomerprofileComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;

  public chartOptions!: Partial<ChartOptions> | any;
  public chartAreaSparkline1Options!: Partial<ChartOptions> | any;


 

  


  profilelist : any;
  profilelistresults: any;

  purchaselist : any;
  purchaselistresults: any;

  quotationlist : any;
  quotationlistresults: any;

  debitlist : any;
  debitlistresults: any;
  public debit_no : number;

  creditlist : any;
  creditlistresults: any;
  credit_no : number;

  goodslist : any;
  goodslistresults: any;

  invoicelist : any;
  invoicelistresults: any;
  
  vendorProfile:any;
  general:any;
  company:any;
  bank:any;
  iban:any;

  

 

 

  constructor(private customerService: CustomerService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {

    

    this.customerService.getProfile().subscribe((data) => {
      this.profilelist = data;
      console.log(this.profilelist);

      this.vendorProfile = data['SOAP:Envelope']['SOAP:Body'][0]['rfc:ZBAPI_SD_CUSTOMEPROFILE_AM.Response'][0];
     
     
      

      this.general = this.vendorProfile.CUSTOMERADDRESS[0];

     

    })
    this.customerService.getSaleslist().subscribe((data) => {
      this.purchaselist = data;
     
      this.purchaselistresults = this.purchaselist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_SALESORDER_LIST_AM.Response'][0]['SALES_ORDERS'][0]['item'].length;
    
    
    })
    this.customerService.getInquiry().subscribe((data) => {
      this.quotationlist = data;
     
      this.quotationlistresults = this.quotationlist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_INQUIRY_LIST_AM.Response'][0]['IT_INQUIRY_LIST'][0]['item'].length;
      
     
    })
    this.customerService.getDebit().subscribe((data) => {
      this.debitlist = data;
     
      this.debitlistresults = this.debitlist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_FI_DEBIT_MEMO_AM.Response'][0]['IT_CREDIT_RESULT'][0]['item'].length;
      this.debit_no = +this.debitlistresults;
      
     
    })
    this.customerService.getCredit().subscribe((data) => {
      this.creditlist = data;
     
      this.creditlistresults = this.creditlist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_FI_CREDIT_MEMO_AM.Response'][0]['IT_CREDIT_RESULT'][0]['item'].length;
      this.credit_no = +this.creditlistresults;
      console.log(this.credit_no,this.debit_no);
      this.chartAreaSparkline1Options = {
      

        series: [this.credit_no,this.debit_no],
        chart: {
          type: "donut"
        },
        labels: ["Credit", "Debit"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
     
     
    })

    this.customerService.getDeliverylist().subscribe((data) => {
      this.goodslist = data;
     
      this.goodslistresults = this.goodslist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_DELIVERY_LIST_AM.Response'][0]['RESULT_DELIVERY_HEADER'][0]['item'].length;
     
    })
    this.customerService.getInvoicelist().subscribe((data) => {
      this.invoicelist = data;
     
      this.invoicelistresults = this.invoicelist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_INVOICE_LIST_AM.Response'][0]['IT_INVOICE_LIST'][0]['item'].length;
      
    })
    this.chartOptions = {
      series: [
        {
          name: "Overdue Date",
          data: [8070, 8070, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35]
        }
      ],
      chart: {
        height: 250,
        type: "bar"

      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["0090000001", "0090000002", "0090000003", "0090000004", "0090000005", "0090000006","0090000007","0090000008","0090000009","0090000010","0090000011","0090000012"]
      }
    };
    
  }
 

}
