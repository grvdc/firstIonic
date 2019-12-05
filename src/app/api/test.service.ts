import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment' ;
import { HttpClient, } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl = environment.BASE_URL;
  options: any;
  constructor(public HttpClient: HttpClient,) { 
    this.options =   {
        'Content-Type': 'application/json',
      }
    
  }
  
  tesApi(data){
    return this.HttpClient.get(`https://randomuser.me/api/?results=`+data );
      // .map(res => res.json());

    }
  
    
    saveUser(data){
      // return this.HttpClient.post(`http://localhost:3000/addname`);
      return this.HttpClient.post('http://localhost:3001/addname',  data);

        // .map(res => res.json());
  
      }
}