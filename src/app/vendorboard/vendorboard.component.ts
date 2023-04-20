import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-vendorboard',
  templateUrl: './vendorboard.component.html',
  styleUrls: ['./vendorboard.component.scss']
})
export class VendorboardComponent implements OnInit {


  isExpanded: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  custo_logout(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Logout successfully'
    })
    this.router.navigate(['/']);
  }

}
