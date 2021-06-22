import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'ng-connection-service';
import { LocalStorageService } from 'ngx-webstorage';
import { Bike } from 'src/app/models/bike';
import Swal from 'sweetalert2';
import { BikesService } from '../bikes.service';
@Component({
  selector: 'app-editbike',
  templateUrl: './editbike.component.html',
  styleUrls: ['./editbike.component.css']
})
export class EditbikeComponent implements OnInit {

  // InternetConnection: boolean = false;
  // isConnected: boolean = true;
  bike: Bike = new Bike();
  constructor(private connectionService: ConnectionService, private localstorageservice: LocalStorageService, private bikeservice: BikesService, private router: Router) {

  }

  ngOnInit(): void {
    this.GetBike();
  }
  GetBike() {
    this.bikeservice.GetBike(this.localstorageservice.retrieve('bikeId')).subscribe(data => {
      this.bike = data as any;
    })
  }


  UpdateBike(val: any) {
    var timeoutIn = 1;
    if (!navigator.onLine && timeoutIn != 10) {
      this.localstorageservice.store('updatebike', val);
      Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
      setTimeout(() => {
        this.UpdateBike(this.localstorageservice.retrieve('updatebike'));
        timeoutIn = timeoutIn + 1;
      }, 3000);

    }
    else {

      this.bikeservice.UpdateBike(val).subscribe(res => {
        if(res=='success'){
          this.localstorageservice.clear('bikeId');
          this.localstorageservice.clear('updatebike');
          Swal.fire({
            title: 'Bike Details Updated Sucessfully',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok!',
            allowOutsideClick:false,
            allowEnterKey:false
          }).then((result: { isConfirmed: any; }) => {
            
            if (result.isConfirmed) {
        this.router.navigateByUrl('');
  
            }
           
          })      
          setTimeout(() => {
        this.router.navigateByUrl('');
           }, 3000);  
       
        }
      })
    }
  }
}




// checkConnection() {
//   console.log("hi");
//   this.connectionService.monitor().subscribe(isConnected => {
//     this.isConnected = isConnected;
//     console.log("hi",isConnected)
//     if (this.isConnected) {
//       this.InternetConnection = true;
//     }
//     else {
//       this.InternetConnection = false;
//     }
//   })
//}

