import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { AppServiceService } from './app-service.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Docker Sample Angular Node Mongo';
  nodeData = {};
  constructor(private appService:AppServiceService){

  }

  ngOnInit(){
    this.getApiData();
  }

  getApiData(){
    return this.appService.getData()
      .subscribe((data)=>{
        this.nodeData = data;
        console.log(data)
        if(error){
          console.log(error)
        }
      });
  }
}
