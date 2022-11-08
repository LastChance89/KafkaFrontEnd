import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EndPointService {

  constructor(private http:HttpClient,) { }


  public listen(){
    return this.http.get("http://localhost:8080/kafka/request/emit");
  }


}
