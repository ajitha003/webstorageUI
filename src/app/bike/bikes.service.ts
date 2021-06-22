import { Injectable } from '@angular/core';
import{SharedserviceService} from '../sharedservice.service'
@Injectable({
  providedIn: 'root'
})
export class BikesService {

  constructor(private sharedService:SharedserviceService) { }

  AddBike(val:any){
    console.log(val, "varuthu");

    return this.sharedService.Post("Bike/AddBike",val);
  }
  UpdateBike(val:any){
    return this.sharedService.Put("Bike/UpdateBike",val);
  }
  DisplayBikes(){
    return this.sharedService.Get("Bike/GetAllBike");
  }

  GetBike(bikeId:number){
   return this.sharedService.Get("Bike/GetBike?bikeId="+bikeId);
  }

  DeleteBike(bikeId:number){
    return this.sharedService.Delete("Bike/DeleteBike?bikeId="+bikeId);
  }




  
}
