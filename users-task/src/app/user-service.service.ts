import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersDataResponse } from './userDataResponse';
import { UsersData } from './usersData';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<UsersDataResponse>{
    return this.http.get<UsersDataResponse>('https://reqres.in/api/users');
  }
}
