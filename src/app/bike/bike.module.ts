import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbikeComponent } from './addbike/addbike.component';
import { EditbikeComponent } from './editbike/editbike.component';
import { DisplaybikesComponent } from './displaybikes/displaybikes.component';
import{BikesService} from './bikes.service'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
    AddbikeComponent,
    EditbikeComponent,
    DisplaybikesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  providers:[
    BikesService
  ]
})
export class BikeModule { }
