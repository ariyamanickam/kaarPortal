import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendorQuotationComponent } from './vendor-quotation/vendor-quotation.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { VendorPurchaseComponent } from './vendor-purchase/vendor-purchase.component';
import { VendorPurchaseDetailComponent } from './vendor-purchase-detail/vendor-purchase-detail.component';
import { VendorQuotationDetailComponent } from './vendor-quotation-detail/vendor-quotation-detail.component';
import { VendorGoodsComponent } from './vendor-goods/vendor-goods.component';
import { VendorGoodsDetailComponent } from './vendor-goods-detail/vendor-goods-detail.component';
import { VendorCreditComponent } from './vendor-credit/vendor-credit.component';
import { VendorDebitComponent } from './vendor-debit/vendor-debit.component';
import { VendorPaymentComponent } from './vendor-payment/vendor-payment.component';
import { VendorInvoiceComponent } from './vendor-invoice/vendor-invoice.component';

const routes: Routes = [

  {
    path: 'profile',
    component: VendorprofileComponent,
  },

  {
    path: 'quotation',
    component: VendorQuotationComponent,
  },
  {
    path: 'quotationDetail',
    component: VendorQuotationDetailComponent,
  },
  {
    path: 'purchase',
    component: VendorPurchaseComponent,
  },
  {
    path: 'purchaseDetail',
    component: VendorPurchaseDetailComponent,
  },
  {
    path: 'payment',
    component: VendorPaymentComponent,
  },
  {
    path: 'debit',
    component: VendorDebitComponent,
  },
  {
    path: 'credit',
    component: VendorCreditComponent,
  },
  {
    path: 'invoice',
    component: VendorInvoiceComponent,
  },
  {
    path: 'goods',
    component: VendorGoodsComponent,
  },
  {
    path: 'goodsDetail',
    component: VendorGoodsDetailComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
