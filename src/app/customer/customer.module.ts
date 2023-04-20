import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { CustodashComponent } from './custodash/custodash.component';
import { CustomerfinancialComponent } from './customerfinancial/customerfinancial.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { InquiryComponent } from './inquiry/inquiry.component';
import { SalesComponent } from './sales/sales.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { InquiryDetailComponent } from './inquiry-detail/inquiry-detail.component';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from 'src/app/shared/material/material.module';




@NgModule({
  declarations: [
    CustomerprofileComponent,
    CustodashComponent,
    CustomerfinancialComponent,
    InquiryComponent,
    SalesComponent,
    DeliveryComponent,
    InvoiceComponent,
    PaymentComponent,
    CreditComponent,
    DebitComponent,
    InvoiceDetailComponent,
    SalesDetailComponent,
    InquiryDetailComponent,
    DeliveryDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    NgApexchartsModule,
    SharedModule,
    MaterialModule
   

    
  ]
})
export class CustomerModule { }
