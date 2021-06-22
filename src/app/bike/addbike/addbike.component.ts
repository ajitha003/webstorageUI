import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike'
import { BikesService } from '../bikes.service'
import { ConnectionService } from 'ng-connection-service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.css']
})
export class AddbikeComponent implements OnInit {

  bike: Bike = new Bike();
  noInternetConnection: boolean = false;
  isConnected: boolean = true;

  constructor(private bikeService: BikesService, private localstorageservice: LocalStorageService, private router: Router) {

  }

  ngOnInit(): void {

  }

  AddBike(val: any) {
         
    var timeoutIn = 1;
    if (!navigator.onLine && timeoutIn != 10) {
      this.localstorageservice.store('addbike', val);
      Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
      setTimeout(() => {
        this.AddBike(this.localstorageservice.retrieve('addbike'));
        timeoutIn = timeoutIn + 1;
      }, 3000);
    }
    else {
      this.bikeService.AddBike(val).subscribe(res => {
        if (res == 'success') {
          this.localstorageservice.clear('addbike');
          Swal.fire({
            title: 'Bike Detail Added Sucessfully',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok!',
            allowOutsideClick: false,
            allowEnterKey: false
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
