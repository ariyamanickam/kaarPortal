import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { customerlogin } from './customerlogin.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
  getInquiry(): Observable<any> {
    return this.http.get<any>('/customer/Inquiry');
  }
  getSaleslist(): Observable<any> {
    return this.http.get<any>('/customer/Saleslist');
  }
  getDeliverylist(): Observable<any> {
    return this.http.get<any>('/customer/Deliverylist');
  }
  getPaymentageing(): Observable<any> {
    return this.http.get<any>('/customer/Paymentageing');
  }
  getCredit(): Observable<any> {
    return this.http.get<any>('/customer/Credit');
  }
  getDebit(): Observable<any> {
    return this.http.get<any>('/customer/Debit');
  }
  getProfile(): Observable<any> {
    return this.http.get<any>('/customer/Profile');
  }
  getInvoicelist(): Observable<any> {
    return this.http.get<any>('/customer/Invoicelist');
  }
  createPost(data:any ):Observable<any> {
    return this.http.post<any>('/customer/login',  data);
  }
  createPost1(data:any ):Observable<any> {
    return this.http.post<any>('/vendor/login',  data);
  }
  createPost2(data:any ):Observable<any> {
    return this.http.post<any>('/employee/login',  data);
  }
  PostInvoiceDetail(data:any ):Observable<any> {
    return this.http.post<any>('/customer/InvoiceDetail',  data);
  }
  PostDeliveryDetail(data:any ):Observable<any> {
    return this.http.post<any>('/customer/DeliveryDetail',  data);
  }
  PostInquiryDetail(data:any ):Observable<any> {
    return this.http.post<any>('/customer/InquiryDetail',  data);
  }
  PostSalesDetail(data:any ):Observable<any> {
    return this.http.post<any>('/customer/SalesDetail',  data);
  }
  getInvoiceDetail( ):Observable<any> {
    return this.http.get<any>('/customer/InvoiceDetail');
  }
  getDeliveryDetail( ):Observable<any> {
    return this.http.get<any>('/customer/DeliveryDetail');
  }
  getInquiryDetail( ):Observable<any> {
    return this.http.get<any>('/customer/InquiryDetail');
  }
  getSalesDetail( ):Observable<any> {
    return this.http.get<any>('/customer/SalesDetail');
  }
  DeliveryDetail:any;
  SetDeliveryDetail(data:any ) {

      return this.DeliveryDetail = data;
  }
  getDeliveryDetail_no( ){

    return this.DeliveryDetail ;
}
getInvoicePrint( ):Observable<any> {
  return this.http.get<any>('/customer/InvoicePrint');
}

}
