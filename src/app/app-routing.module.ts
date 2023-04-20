import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerModule } from './customer/customer.module';
import { CustomerboardComponent } from './customerboard/customerboard.component';
import { VendorboardComponent } from './vendorboard/vendorboard.component';
import { VendorModule } from './vendor/vendor.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeboardComponent } from './employeeboard/employeeboard.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: CustomerDashboardComponent,
  },
  {
    path: 'customerboard',
    component:CustomerboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./customer/customer.module').then (m => m.CustomerModule)
      }
    ]

    
  },
  {
    path: 'vendorboard',
    component: VendorboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./vendor/vendor.module').then (m => m.VendorModule)
      }
    ]

    
  },
  {
    path: 'employeeboard',
    component: EmployeeboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./employee/employee.module').then (m => m.EmployeeModule)
      }
    ]

    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
