import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {

  InvoiceDetail: any;
  InvoiceDetailresult: any;

  InvoiceDetail_Print: any;
  InvoiceDetailresult_Print: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    

    this.customerService.getInvoiceDetail().subscribe((data) => {
      this.InvoiceDetail = data;

      this.InvoiceDetailresult = this.InvoiceDetail['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_INVOICE_DETAILS_AM.Response'][0]['IT_INVOICE_DETAIL'][0]['item']
      console.log("Invoicedetail", this.InvoiceDetailresult);

    })

    Swal.fire({

      imageUrl: 'https://i0.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1',

      imageHeight: 380,
     

      imageAlt: 'A tall image',

      showConfirmButton: false,

      allowEscapeKey: false,

      allowOutsideClick: false,

      background: '#222222',

    })
   
    this.customerService.getInvoicePrint().subscribe((data) => {
      this.InvoiceDetail_Print = data;

      this.InvoiceDetailresult_Print = this.InvoiceDetail_Print[0]['INVOICE']
      console.log("InvoiceDetailresult_Print", this.InvoiceDetailresult_Print);
      Swal.close()

    })
   
    

  }
  downloadPdf(base64String, fileName) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }
  InvoicePrint(){

    let base64String = this.InvoiceDetailresult_Print;
    this.downloadPdf(base64String,"Invoice-pdf");
  }


}
