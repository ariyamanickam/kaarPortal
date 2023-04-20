import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerboard',
  templateUrl: './customerboard.component.html',
  styleUrls: ['./customerboard.component.scss']
})
export class CustomerboardComponent implements OnInit {
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
