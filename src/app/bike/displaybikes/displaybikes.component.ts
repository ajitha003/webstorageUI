import { Component, OnInit } from '@angular/core';
import{Bike} from '../../models/bike'
import{BikesService} from '../bikes.service'
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-displaybikes',
  templateUrl: './displaybikes.component.html',
  styleUrls: ['./displaybikes.component.css']
})
export class DisplaybikesComponent implements OnInit {
      
   bikeList:Bike[]=[];
   loading=false;
  constructor(private bikeService:BikesService,private router:Router,private localstorageservice:LocalStorageService) { }

  ngOnInit(): void {
    this.GetBikeDetails();
  }

  GetBikeDetails(){
    this.loading=true;
    this.bikeService.DisplayBikes().subscribe(data=>{
      this.loading=false;
      this.bikeList=data as any;
     
      
    })
       
  }

  deleteBike(bikeId:number){
   
this.bikeService.DeleteBike(bikeId).subscribe(res=>{
  this.GetBikeDetails();
});

  }

  editBike(bikeId:number){
    this.localstorageservice.store('bikeId',bikeId);
    this.router.navigateByUrl('EditBike');
  }
}
