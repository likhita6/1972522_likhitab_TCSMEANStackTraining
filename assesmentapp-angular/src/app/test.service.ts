import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test} from './test.sample';

@Injectable({
  providedIn: 'root'  //it is equal to provided in app.module.ts file
})
export class TestService {

  constructor(public http:HttpClient) { }

  loadTestDetails():Observable<Test[]>{
    return this.http.get<Test[]>("/assets/test.json");
  }
}