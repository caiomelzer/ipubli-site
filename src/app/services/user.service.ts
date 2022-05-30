import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; 
import { Response } from '../models/response.model'; 
import { SharedService } from './/shared.service';


const baseUrl = 'http://ec2-15-228-148-206.sa-east-1.compute.amazonaws.com:4001/api/v1';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient, private sharedService: SharedService) { }
    
    signup(user: User): Observable<any> {
        return this.http.post(baseUrl+'/users/register', user);
    }

    signin(user: any): Observable<any> {
        return this.http.post(baseUrl+'/users/authenticate', user);
    }

    getCurrentUser(): Observable<any>{
        let headers =  this.sharedService.getHeaders()
        return this.http.get(baseUrl+'/users/current', {headers});
    }
  }

