import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-erroresponse',
  templateUrl: './erroresponse.component.html',
  styleUrls: ['./erroresponse.component.css']
})
export class ErroresponseComponent implements OnInit {

  title = 'Angular-Interceptor';
  errorresponse:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { 
    this.errorresponse=data;
  }

  ngOnInit(): void {
  }

}
