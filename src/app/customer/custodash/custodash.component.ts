import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-custodash',
  templateUrl: './custodash.component.html',
  styleUrls: ['./custodash.component.scss']
})
export class CustodashComponent implements OnInit {

  Inquirylist: any;
  Inquiryresult: any;
  Saleslist: any;
  Saleslistresults: any;
  Deliverylist: any;
  Deliverylistresults: any;


  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ['VBELN', 'KUNAG', 'TCODE', 'TZONIS'];

  public dataSource1: MatTableDataSource<any>;
  public displayedColumns1: string[] = ['SD_DOC', 'SHIP_POINT', 'SHORT_TEXT', 'REQ_QTY'];

  public dataSource2: MatTableDataSource<any>;
  public displayedColumns2: string[] = ['VBELN', 'AWAHR', 'NETWR', 'KNUMV'];



  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService: CustomerService, private _liveAnnouncer: LiveAnnouncer) { }



  ngOnInit() {

    this.customerService.getInquiry().subscribe((data) => {
      this.Inquirylist = data;

      this.Inquiryresult = this.Inquirylist[0]['item']
      console.log("Inquiry", this.Inquiryresult);

      this.dataSource2 = new MatTableDataSource(this.Inquiryresult);
      this.dataSource2.paginator = this.paginator;
      this.dataSource2.sort = this.sort;
    })
    this.customerService.getSaleslist().subscribe((data) => {
      this.Saleslist = data;

      this.Saleslistresults = this.Saleslist[0]['item']
      console.log("Saleslist", this.Saleslistresults);

      this.dataSource1 = new MatTableDataSource(this.Saleslistresults);
      this.dataSource1.paginator = this.paginator;
      this.dataSource1.sort = this.sort;

    })
    this.customerService.getDeliverylist().subscribe((data) => {
      this.Deliverylist = data;

      this.Deliverylistresults = this.Deliverylist[0]['item']
      console.log("Deliverylist", this.Deliverylistresults);




      this.dataSource = new MatTableDataSource(this.Deliverylistresults);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;



    })

  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(Event);
  }
  public applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
    console.log(Event);
  }
  public applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
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
