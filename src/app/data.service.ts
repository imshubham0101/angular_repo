import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  constructor(private helper: HttpClient) 
  {
    console.log("Data Service Object Created");
  }

  Select()
  {
    return  this.helper.get("http://localhost:9999/emps");
  };

  SelectById(No)
  {
    return this.helper.get("http://localhost:9999/emps/"+ No);
  }

  Update(empobj){
    return this.helper.put("http://localhost:9999/emps/"+ empobj.No,empobj);

  }

  Delete(No)
  {
    return this.helper.delete("http://localhost:9999/emps/"+ No);
  }

  Insert(empobj){
    return this.helper.post("http://localhost:9999/emps",empobj);

  }
   
}
