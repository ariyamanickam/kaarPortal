import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustodashComponent } from './custodash/custodash.component';
import { CustomerfinancialComponent } from './customerfinancial/customerfinancial.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { SalesComponent } from './sales/sales.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentComponent } from './payment/payment.component';
import { DebitComponent } from './debit/debit.component';
import { CreditComponent } from './credit/credit.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';

const routes: Routes = [
  {
    path: 'profile',
    component:CustomerprofileComponent ,
  },
  {
    path: 'dash',
    component: CustodashComponent,
  },
  {
    path: 'financial',
    component: CustomerfinancialComponent,
  },
  {
    path: 'inquiry',
    component: InquiryComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'debit',
    component: DebitComponent,
  },
  {
    path: 'credit',
    component: CreditComponent,
  },
  {
    path: 'InvoiceDetail',
    component: InvoiceDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
