import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/vendor.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx';

import { ChangeDetectionStrategy } from '@angular/core';
import { merge, Observable, of, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { defaultLanguage, languages } from 'src/app/shared/model/languages';
import { SpeechError } from 'src/app/shared/model/speech-error';
import { SpeechEvent } from 'src/app/shared/model/speech-event';
import { SpeechRecognizerService } from 'src/app/shared/services/web-apis/speech-recognizer.service';
import { ActionContext } from 'src/app/shared/services/actions/action-context';
import { SpeechNotification } from 'src/app/shared/model/speech-notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-invoice',
  templateUrl: './vendor-invoice.component.html',
  styleUrls: ['./vendor-invoice.component.scss']
})
export class VendorInvoiceComponent implements OnInit {

  languages: string[] = languages;
  currentLanguage: string = defaultLanguage;
  totalTranscript?: string;
  testing_variable: any;

  transcript$?: Observable<string>;
  listening$?: Observable<boolean>;
  errorMessage$?: Observable<string>;
  defaultError$ = new Subject<string | undefined>();

  fileName= 'Vendor_Invoice.xlsx';

  invoicelist : any;
  invoicelistresults: any;

  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ['INV_DOC_NO', 'COMP_CODE', 'CURRENCY_ISO', 'DOC_DATE','INVOICE_STATUS','GROSS_AMNT','FISC_YEAR'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private vendorService: VendorService, private _liveAnnouncer: LiveAnnouncer
    ,private speechRecognizer: SpeechRecognizerService,
    private actionContext: ActionContext,private router: Router) { }

  ngOnInit(): void {

    const webSpeechReady = this.speechRecognizer.initialize(this.currentLanguage);
    if (webSpeechReady) {
      this.initRecognition();
    } else {
      this.errorMessage$ = of('Your Browser is not supported. Please try Google Chrome.');
    }
    this.vendorService.getInvoice().subscribe((data) => {
      this.invoicelist = data;
     
      this.invoicelistresults = this.invoicelist['SOAP:Envelope']['SOAP:Body'][0]['rfc:ZBAPI_FI_VENDOR_INV_LIST_AM.Response'][0]['ET_HEADERLIST'][0]['item']
      console.log("Invoice",this.invoicelistresults);
      this.dataSource = new MatTableDataSource(this.invoicelistresults);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  start(): void {
    if (this.speechRecognizer.isListening) {
      this.stop();
      return;
    }

    this.defaultError$.next(undefined);
    this.speechRecognizer.start();
  }

  stop(): void {
    this.speechRecognizer.stop();
  }

  selectLanguage(language: string): void {
    if (this.speechRecognizer.isListening) {
      this.stop();
    }
    this.currentLanguage = language;
    this.speechRecognizer.setLanguage(this.currentLanguage);
  }

  private initRecognition(): void {
    this.transcript$ = this.speechRecognizer.onResult().pipe(
      tap((notification) => {
        this.processNotification(notification);
      }),
      map((notification) => notification.content || '')
    );

    this.listening$ = merge(
      this.speechRecognizer.onStart(),
      this.speechRecognizer.onEnd()
    ).pipe(map((notification) => notification.event === SpeechEvent.Start));

    this.errorMessage$ = merge(
      this.speechRecognizer.onError(),
      this.defaultError$
    ).pipe(
      map((data) => {
        if (data === undefined) {
          return '';
        }
        if (typeof data === 'string') {
          return data;


        }
        let message;
        switch (data.error) {
          case SpeechError.NotAllowed:
            message = `Cannot run the demo.
            Your browser is not authorized to access your microphone.
            Verify that your browser has access to your microphone and try again.`;
            break;
          case SpeechError.NoSpeech:
            message = `No speech has been detected. Please try again.`;
            break;
          case SpeechError.AudioCapture:
            message = `Microphone is not available. Plese verify the connection of your microphone and try again.`;
            break;
          default:
            message = '';
            break;
        }
        return message;
      })
    );
  }

  private processNotification(notification: SpeechNotification<string>): void {
    if (notification.event === SpeechEvent.FinalContent) {
      const message = notification.content?.trim() || '';
      // console.log(message);
      this.testing_variable = message;
      this.testing(this.testing_variable);


      this.actionContext.processMessage(message, this.currentLanguage);
      // this.actionContext.runAction(message, this.currentLanguage);
      this.totalTranscript = this.totalTranscript
        ? `${this.totalTranscript}\n${message}`
        : notification.content;
    }
  }
  private testing(test: any): void {
    console.log(test);
    var filterValue;
    if(test=="reset")
    {
      filterValue = "";
    }
    else if(test=="log out")
    {
      this.stop();
      this.router.navigate(['/']);
    }
    else if(test=="invoice")
    {
      this.stop();
      this.router.navigate(['/vendorboard/invoice']);
    }
    else if(test=="credit")
    {
      this.stop();
      this.router.navigate(['/vendorboard/credit']);
    }
    else if(test=="debit")
    {
      this.stop();
      this.router.navigate(['/vendorboard/debit']);
    }
    else if(test=="quotation")
    {
      this.stop();
      this.router.navigate(['/vendorboard/quotation']);
    }
    else if(test=="purchase")
    {
      this.stop();
      this.router.navigate(['/vendorboard/purchase']);
    }
    else if(test=="goods")
    {
      this.stop();
      this.router.navigate(['/vendorboard/goods']);
    }
    else if(test=="payment")
    {
      this.stop();
      this.router.navigate(['/vendorboard/payment']);
    }
    else{
      filterValue = test;
    }
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(Event);
  }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
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
