import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InfoApiService {

  constructor(
    public http: HttpClient,
  ) { }


  getInfoApi(termino:string){
    
    return  this.http.get(`http://localhost:8080/ApiRestDemo/webresources/apiprueba?termino=${termino}`)
  }
}
