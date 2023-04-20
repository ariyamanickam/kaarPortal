import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
  getQuotation(): Observable<any> {
    return this.http.get<any>('/vendor/quotation');
  }
  getPurchase(): Observable<any> {
    return this.http.get<any>('/vendor/purchase');
  }
  getGoods(): Observable<any> {
    return this.http.get<any>('/vendor/goods');
  }
  getDebit(): Observable<any> {
    return this.http.get<any>('/vendor/debit');
  }
  getCredit(): Observable<any> {
    return this.http.get<any>('/vendor/credit');
  }
  getPayage(): Observable<any> {
    return this.http.get<any>('/vendor/payage');
  }
  getInvoice(): Observable<any> {
    return this.http.get<any>('/vendor/invoice');
  }
  getProfile(): Observable<any> {
    return this.http.get<any>('/vendor/profile');
  }
  getPurchasedetail(): Observable<any> {
    return this.http.get<any>('/vendor/purchasedetail');
  }
  getQuotationdetail(): Observable<any> {
    return this.http.get<any>('/vendor/quotationdetail');
  }
  getGoodsdetail(): Observable<any> {
    return this.http.get<any>('/vendor/goodsdetail');
  }
  PostPurchasedetail(data:any ):Observable<any> {
    return this.http.post<any>('/vendor/purchasedetail',  data);
  }
  PostQuotationdetail(data:any ):Observable<any> {
    return this.http.post<any>('/vendor/quotationdetail',  data);
  }
  PostGoodsdetail(data:any ):Observable<any> {
    return this.http.post<any>('/vendor/goodsdetail',  data);
  }

}
