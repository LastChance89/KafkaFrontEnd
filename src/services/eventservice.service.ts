import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  constructor(private _zone: NgZone) { }


  getKafkaConsumerEvent(){
    return new Observable((observer: Observer<any>)=>{
      const eventSource = new EventSource('/endpoint');

      eventSource.onmessage = event =>{
        this._zone.run(()=>{
          observer.next(event);
        })
      }
      eventSource.onerror = error =>{
        this._zone.run(()=>{
          observer.error(error);
        })
      }
    })
  }


}
