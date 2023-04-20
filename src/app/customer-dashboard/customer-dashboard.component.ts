import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { customerlogin } from '../customerlogin.interface';
import Swal from 'sweetalert2'
import { MatDialog } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';






@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent {
  

  postList: any;
  post = {
    title: '',
    url: ''
  };
  postList1: any;
  post1 = {
    title: '',
    url: ''
  };
  postList2: any;
  post2 = {
    title: '',
    url: ''
  };
  result_customer: any;
  result_vendor: any;
  result_employee: any;

  constructor(private customerService: CustomerService, private router: Router , private dialog : MatDialog) {
    
  }
 
  addPost() {
    const newPost = {
      CUSTOMER_ID: this.post.title,
      PASSWORD: this.post.url,
    };
    console.log(newPost);
    this.customerService.createPost(newPost).subscribe((data) => {
      console.log(data);
      this.result_customer = data;
      if (this.result_customer == "VALID USER") {
        this.dialog.closeAll();
        Swal.fire(

          'Successfully Login!',
  
          'Trust the Magic of new beginnings',
  
          'success'
  
        );

        this.router.navigate(['/customerboard/profile']);
        
       
      }
      else{
        Swal.fire(

          'User Not Found!',
  
          'Proper Credential Please',
  
          'question'
  
        );
      }
      this.dialog.closeAll();

    }, (err) => console.log(err));
    this.post = { title: '', url: '' };
  }
  addPost1() {
    const newPost = {
      VENDOR_ID: this.post1.title,
      PASSWORD: this.post1.url,
    };
    console.log(newPost);
    this.customerService.createPost1(newPost).subscribe((data) => {
      console.log(data);
      this.result_vendor = data;
      if (this.result_vendor == "VALID USER") {
        this.dialog.closeAll();
        Swal.fire(

          'Successfully Login!',
  
          'Trust the Magic of new beginnings',
  
          'success'
  
        );

        this.router.navigate(['/vendorboard/profile']);
        
       
      }
      else{
        Swal.fire(

          'User Not Found!',
  
          'Proper Credential Please',
  
          'question'
  
        );
      }
      this.dialog.closeAll();

    }, (err) => console.log(err));
    this.post = { title: '', url: '' };
  }
  addPost2() {
    const newPost = {
      EMPLOYEE_ID: this.post2.title,
      PASSWORD: this.post2.url,
    };
    console.log(newPost);
    this.customerService.createPost2(newPost).subscribe((data) => {
      console.log(data);
      this.result_employee = data;
      if (this.result_employee == "VALID USER") {
        this.dialog.closeAll();
        Swal.fire(

          'Successfully Login!',
  
          'Trust the Magic of new beginnings',
  
          'success'
  
        );

        this.router.navigate(['/employeeboard/profile']);
        
       
      }
      else{
        Swal.fire(

          'User Not Found!',
  
          'Proper Credential Please',
  
          'question'
  
        );
      }
      this.dialog.closeAll();

    }, (err) => console.log(err));
  
  }
}



