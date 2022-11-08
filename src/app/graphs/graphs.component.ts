import { Component, OnInit } from '@angular/core';
import { EventserviceService } from 'src/services/eventservice.service';
import { EndPointService } from '../services/endpoint.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  constructor(private _eventservice: EventserviceService, private endPointService:EndPointService) {

   }
  ngOnInit(): void {
    this.endPointService.listen().subscribe({
      next: (result:any)=>{
        console.log(result);
      },
      error:(err: any)=>{
        console.log(err);
      }
    })
  }

  
}
