import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErroresponseComponent } from './erroresponse/erroresponse.component';
@Injectable({
  providedIn: 'root'
})
export class ErroresponseService {
  public isDialogOpen: Boolean = false;
  constructor(public dialog:MatDialog) { }

  openDialog(data:any):any {
    alert(data.reason);

  //   if (this.isDialogOpen) {
  //       return false;
       
  //   }
   
  //   this.isDialogOpen = true;
  //   const dialogRef = this.dialog.open(ErroresponseComponent, {
  //       width: '300px',
  //       data: data
        
  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //       console.log('The dialog was closed');
  //       this.isDialogOpen = false;
       
  //   });
  // }
}
}