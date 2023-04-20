import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
  getLeave(): Observable<any> {
    return this.http.get<any>('/employee/leave');
  }
  getPayroll(): Observable<any> {
    return this.http.get<any>('/employee/payroll');
  }
  getPayslip(): Observable<any> {
    return this.http.get<any>('/employee/payslip');
  }
  getProfile(): Observable<any> {
    return this.http.get<any>('/employee/profile');
  }
  PostPayslip(data:any ):Observable<any> {
    return this.http.post<any>('/employee/payslip',  data);
  }
}
