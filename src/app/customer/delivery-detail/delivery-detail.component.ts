import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.scss']
})
export class DeliveryDetailComponent implements OnInit {

  DeliveryDetail: any;
  Deliveryfinal: any;
  DeliveryDetailresult: any;
  DeliveryDetail_no:any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customerService.getDeliveryDetail().subscribe((data) => {
      this.DeliveryDetail = data;

      this.DeliveryDetailresult = this.DeliveryDetail[0]['item'];
      console.log("Deliverydetail", this.DeliveryDetailresult);
      this.DeliveryDetail_no= this.customerService.getDeliveryDetail_no()
      console.log( this.DeliveryDetail_no) ;
      for(var i=0;i<this.DeliveryDetailresult.length;i++)
      {
        if(this.DeliveryDetailresult[i].VBELN = this.DeliveryDetail_no ){
                 this.Deliveryfinal = this.DeliveryDetailresult[i];
                 break;
        }
      }
      console.log("deliverydetailresult after parsing ",this.Deliveryfinal)
    

    })
  }
   

}
