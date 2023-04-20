import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CustomerDashboardComponent } from '../customer-dashboard/customer-dashboard.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }
  cus_login_open(){

    this.dialog.open(CustomerDashboardComponent,{

      panelClass:'Cus_Login'

    });

  }
  clients: string = "assets/clients.jpg";
  kaarlogo: string = "assets/kaarlogo1.png";

  ngOnInit(): void {
  }
  btnClick() {
    this.router.navigate(['/customer-dashboard']);
  };

}
