import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/vendor.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-vendor-quotation-detail',
  templateUrl: './vendor-quotation-detail.component.html',
  styleUrls: ['./vendor-quotation-detail.component.scss']
})
export class VendorQuotationDetailComponent implements OnInit {

  

  quotationlist : any;
  quotationlistresults: any;

  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ['ALLOC_NMBR', 'AMOUNT', 'BLINE_DATE', 'DOC_TYPE','REF_DOC_NO','FISC_YEAR','FIS_PERIOD'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private vendorService: VendorService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {

    this.vendorService.getQuotationdetail().subscribe((data) => {
      this.quotationlist = data;
     
      this.quotationlistresults = this.quotationlist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_MM_QUOT_REQ_DETAIL_AM.Response'][0]['IT_RESULT'][0]['item']
      console.log("QuotationDetail",this.quotationlistresults);
      this.dataSource = new MatTableDataSource(this.quotationlistresults);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
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
