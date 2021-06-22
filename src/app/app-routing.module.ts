import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DisplaybikesComponent}from './bike/displaybikes/displaybikes.component'
import{AddbikeComponent}from './bike/addbike/addbike.component'
import{EditbikeComponent}from './bike/editbike/editbike.component'
const routes: Routes = 
[
  {path:'',component:DisplaybikesComponent},
  {path:'AddBike',component:AddbikeComponent},
  {path:'EditBike',component:EditbikeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
