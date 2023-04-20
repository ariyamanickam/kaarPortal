import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { EmployeePayslipComponent } from './employee-payslip/employee-payslip.component';
import { EmployeehrComponent } from './employeehr/employeehr.component';

const routes: Routes = [
  {
    path: 'profile',
    component: EmployeeprofileComponent ,
  },
  {
    path: 'leave',
    component: EmployeeLeaveComponent ,
  },
  {
    path: 'payroll',
    component: EmployeePayrollComponent ,
  },
  {
    path: 'payslip',
    component: EmployeePayslipComponent ,
  },
  {
    path: 'hr',
    component: EmployeehrComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
