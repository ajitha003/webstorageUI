import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthheaderInterceptor } from './http.interceptor';

import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import{ErroresponseService} from './error/erroresponse.service';
import{ SharedserviceService}from './sharedservice.service';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import{NgxWebstorageModule} from 'ngx-webstorage';
import{BikeModule}from './bike/bike.module'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConnectionServiceModule} from 'ng-connection-service'; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule ,
    NgxWebstorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BikeModule,
    NgbModule,
    ConnectionServiceModule
    
  ],
  providers: [
    NgxWebstorageModule,
    ErroresponseService,
    SharedserviceService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthheaderInterceptor,multi:true},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
