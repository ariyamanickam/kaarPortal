import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-inquiry-detail',
  templateUrl: './inquiry-detail.component.html',
  styleUrls: ['./inquiry-detail.component.scss']
})
export class InquiryDetailComponent implements OnInit {

  InquiryDetail: any;
  InquiryDetailresult: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customerService.getInquiryDetail().subscribe((data) => {
      this.InquiryDetail = data;

      this.InquiryDetailresult = this.InquiryDetail['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_SD_INQUIRY_DETAILS_AM.Response'][0]['IT_INQUIRY_DETAILS'][0]['item'][1];
      console.log("Inquirydetail", this.InquiryDetailresult);

    })
  }

}
