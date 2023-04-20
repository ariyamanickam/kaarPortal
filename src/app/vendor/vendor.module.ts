import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { VendorQuotationComponent } from './vendor-quotation/vendor-quotation.component';
import { VendorPurchaseComponent } from './vendor-purchase/vendor-purchase.component';
import { VendorGoodsComponent } from './vendor-goods/vendor-goods.component';
import { VendorPaymentComponent } from './vendor-payment/vendor-payment.component';
import { VendorInvoiceComponent } from './vendor-invoice/vendor-invoice.component';
import { VendorDebitComponent } from './vendor-debit/vendor-debit.component';
import { VendorCreditComponent } from './vendor-credit/vendor-credit.component';
import { VendorPurchaseDetailComponent } from './vendor-purchase-detail/vendor-purchase-detail.component';
import { VendorQuotationDetailComponent } from './vendor-quotation-detail/vendor-quotation-detail.component';
import { VendorGoodsDetailComponent } from './vendor-goods-detail/vendor-goods-detail.component';
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
import { MatDialogModule } from '@angular/material/dialog';
import { NgApexchartsModule } from 'ng-apexcharts';

import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    VendorprofileComponent,
    VendorQuotationComponent,
    VendorPurchaseComponent,
    VendorGoodsComponent,
    VendorPaymentComponent,
    VendorInvoiceComponent,
    VendorDebitComponent,
    VendorCreditComponent,
    VendorPurchaseDetailComponent,
    VendorQuotationDetailComponent,
    VendorGoodsDetailComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
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
export class VendorModule { }
