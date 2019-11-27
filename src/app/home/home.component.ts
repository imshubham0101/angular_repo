import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps : any ;
  constructor(public service : DataService) {

   }

  ngOnInit() {

    let obresult = this.service.Select();

    obresult.subscribe((result)=>{
      console.log(result);
      this.emps = result;
    });
    // this.emps = [
    //   {"No":10 ,"Name":"Ashish","Age":22},
    //   {"No":20 ,"Name":"Sagar","Age":25},
    //   {"No":30 ,"Name":"Rushi","Age":24}    
    // ]
  }

}
