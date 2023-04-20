import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { EmployeePayslipComponent } from './employee-payslip/employee-payslip.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
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

import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { EmployeehrComponent } from './employeehr/employeehr.component';



@NgModule({
  declarations: [
    EmployeeprofileComponent,
    EmployeePayslipComponent,
    EmployeeLeaveComponent,
    EmployeePayrollComponent,
    EmployeehrComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
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
    SharedModule,
    MaterialModule
  ]
})
export class EmployeeModule { }
