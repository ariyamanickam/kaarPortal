import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConnectableObservable } from 'rxjs';



@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.scss']
})

 
export class EmployeeprofileComponent implements OnInit {

  Profilelist: any;
  Profilelistresult: any;
  Leave_count: number = 0;

  Leavelist: any;
  Leavelistresult: any;
  
  Leave_pl : number = 0;
  Leave_ul : number = 0;
  

  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ['SEQUENCENUMBER', 'PAYTYPE_TEXT', 'PAYDATE', 'FPEND','Payslip'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private employeeService: EmployeeService ,private _liveAnnouncer: LiveAnnouncer, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.employeeService.getProfile().subscribe((data) => {
      this.Profilelist = data['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_HR_EMPLOY_PROFILE_AM.Response'][0]['P_RESULT_EXPORT'];

      this.Profilelistresult = this.Profilelist[0]
      console.log("Profilelistresult", this.Profilelistresult);


      this.dataSource = new MatTableDataSource(this.Profilelistresult);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    
    })
    this.employeeService.getLeave().subscribe((data) => {
      this.Leavelist = data;

      this.Leavelistresult = this.Leavelist['SOAP:Envelope']['SOAP:Body'][0]['ns0:ZBAPI_HR_EMP_LEAVE_DATA_AM.Response'][0]['IT_RESULT'][0]['item']
      console.log("Leavelistresult", this.Leavelistresult);
      console.log("global",this.Leave_count);
      
      
      for(var i=0; i< this.Leavelistresult.length; i++ )
      {
       
        this.Leave_count = this.Leave_count + parseInt(this.Leavelistresult[i].ABSENCEDAYS);
        if(this.Leavelistresult[i].NAMEOFABSENCETYPE == "Unpaid leave")
        {
          this.Leave_ul = this.Leave_ul + parseInt(this.Leavelistresult[i].ABSENCEDAYS);
        }
        else {
           this.Leave_pl = this.Leave_pl + parseInt(this.Leavelistresult[i].ABSENCEDAYS);
        }
      
        
      }
      console.log("Leave_count",this.Leave_count);
      console.log("Leave_count_ul",this.Leave_ul);
      console.log("Leave_count_pl",this.Leave_pl);
    })
  }
  
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(Event);
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
function Floor(ABSENCEDAYS: any) {
  throw new Error('Function not implemented.');
}

