import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private http:HttpClient) { }

  Get(url:string){
    return this.http.get(url);
  }
  Post(url:string,val:any){
    return this.http.post(url,val);
  }
  Put(url:string,val:any){
    return this.http.put(url,val);
  }
  Delete(url:string){
    console.log("hh",url);
    return this.http.delete(url);
  }
}
