import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/vendor.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
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
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.scss']
})
export class VendorprofileComponent implements OnInit {

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

  

  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ['ALLOC_NMBR', 'AMOUNT', 'BLINE_DATE', 'DOC_TYPE','REF_DOC_NO','FISC_YEAR','FIS_PERIOD'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private vendorService: VendorService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {

    this.vendorService.getProfile().subscribe((data) => {
      this.profilelist = data;

      this.vendorProfile = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_MM_VENDOR_PROFILE_AM.Response'][0];
     
     
      

      this.general = this.vendorProfile.E_GENERALDETAIL[0];

      this.company = this.vendorProfile.E_COMPANYDETAIL[0];



      this.bank = this.vendorProfile.ET_BANKDETAIL[0]['item'][0];

      this.iban = this.vendorProfile.ET_VENDORIBANDETAIL[0]['item'][0];

      

      console.log("Vendor Details : ",this.vendorProfile);

     

      console.log("Vendor General : ",this.general);

      console.log("Vendor Company : ",this.company);

      console.log("Vendor bank : ",this.bank);

      console.log("Vendor IBAN : ",this.iban);

    })
    this.vendorService.getPurchase().subscribe((data) => {
      this.purchaselist = data;
     
      this.purchaselistresults = this.purchaselist['SOAP:Envelope']['SOAP:Body'][0]['rfc:ZBAPI_MM_PURCHASEORD_LIS_AM.Response'][0]['IT_PO_HEADERS'][0]['item'].length;
    
    
    })
    this.vendorService.getQuotation().subscribe((data) => {
      this.quotationlist = data;
     
      this.quotationlistresults = this.quotationlist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_MM_QUOT_REQ_LIST_AM.Response'][0]['IT_RESULT'][0]['item'].length;
      
     
    })
    this.vendorService.getDebit().subscribe((data) => {
      this.debitlist = data;
     
      this.debitlistresults = this.debitlist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_FI_VENDOR_DEBIT_AM.Response'][0]['ET_LINEITEM'][0]['item'].length;
      this.debit_no = +this.debitlistresults;
      
     
    })
    this.vendorService.getCredit().subscribe((data) => {
      this.creditlist = data;
     
      this.creditlistresults = this.creditlist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_FI_VENDOR_CREDIT_AM.Response'][0]['ET_LINEITEM'][0]['item'].length;
      this.credit_no = +this.creditlistresults;
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

    this.vendorService.getGoods().subscribe((data) => {
      this.goodslist = data;
     
      this.goodslistresults = this.goodslist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_MM_GOODSLIST_AM.Response'][0]['IT_GOODSMVT_HEADER'][0]['item'].length;
     
    })
    this.vendorService.getInvoice().subscribe((data) => {
      this.invoicelist = data;
     
      this.invoicelistresults = this.invoicelist['SOAP:Envelope']['SOAP:Body'][0]['rfc:ZBAPI_FI_VENDOR_INV_LIST_AM.Response'][0]['ET_HEADERLIST'][0]['item'].length;
      
    })
    this.chartOptions = {
      series: [
        {
          name: "Overdue Date",
          data: [35, 34, 34, 34, 34, 34, 34, 34, 34]
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
        categories: ["5100000000", "5100000001", "5100000002", "5100000003", "5100000004", "5100000005", "5100000006", "5100000007", "5100000008"]
      }
    };
    
  }
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(Event);
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  fragment(data: any) {
    console.log("Data from a row", data);
  }

}
