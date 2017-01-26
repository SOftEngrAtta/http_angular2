import { Component  } from '@angular/core';
import { Http, Response }  from '@angular/http';
import {Observable } from 'rxjs/Rx';
import {httpService} from './httpClient';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "app Works"
  usersArray = null;
  // success = {
  //   _body : 'as'
  // } 
  apiUrl : string =
"http://localhost:3000/patients/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjUwLCJ1c2VybmFtZSI6ImFiZHVsbGFoIiwibmFtZSI6ImFiZHVsbGFoIiwicm9sZSI6ImRvY3RvciIsImFkZHJlc3MiOiJrYXJhY2hpIiwiYXJlYSI6IkF6aXphYmFkIiwiY2l0eSI6ImthcmFjaGkiLCJhc3NpZ25lZF9kb2N0b3IiOm51bGwsInBvc3RhbENvZGUiOjEyMzQ1LCJpbWFnZVBhdGgiOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2xvb3BzLWluYy9pbWFnZS91cGxvYWQvdjE0ODE4OTE1OTYvZm1uMnBnd3VianpxbmVmZnZ2MGkuanBnIiwiZXhwIjoxNDg2MDI1MTU2LCJpYXQiOjE0ODU0MjAzNTZ9.-gxMRVfMj_jP6W2I8NSIUQUIUaZi0YjdPfUQerIhBYk";
  constructor(private _http : httpService){
  }
  getPatientListFunction() {
     this._http.getClientData(this.apiUrl).subscribe((success)=>this.usersArray=success);
  }

  extractData(success){

  }

  private handleError(error){

  }

  // getPatientListFunction():Observable<string> {    
    // return this._http.get('http://localhost:3000/patients/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjUwLCJ1c2VybmFtZSI6ImFiZHVsbGFoIiwibmFtZSI6ImFiZHVsbGFoIiwicm9sZSI6ImRvY3RvciIsImFkZHJlc3MiOiJrYXJhY2hpIiwiYXJlYSI6IkF6aXphYmFkIiwiY2l0eSI6ImthcmFjaGkiLCJhc3NpZ25lZF9kb2N0b3IiOm51bGwsInBvc3RhbENvZGUiOjEyMzQ1LCJpbWFnZVBhdGgiOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2xvb3BzLWluYy9pbWFnZS91cGxvYWQvdjE0ODE4OTE1OTYvZm1uMnBnd3VianpxbmVmZnZ2MGkuanBnIiwiZXhwIjoxNDg2MDI1MTU2LCJpYXQiOjE0ODU0MjAzNTZ9.-gxMRVfMj_jP6W2I8NSIUQUIUaZi0YjdPfUQerIhBYk')
    // .map((res: Response) => res.json().data)
  // }
}
