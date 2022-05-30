import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../models/state.model';
import { Influencer } from '../models/influencer.model';
import { Proposal } from '../models/proposal.model';
import { User } from './../user';


const baseUrl = 'http://ec2-15-228-148-206.sa-east-1.compute.amazonaws.com:4001/api/v1';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) { }
  getStates(): Observable<State[]> {
    return this.http.get<State[]>(baseUrl+'/domains/states');
  }
  getToken(): any {
    return localStorage.getItem('ACCESS_TOKEN');
  }
  getHeaders():any {
    return { 'Authorization': 'Bearer '+this.getToken()};
  }
  getTopInstagramUsers():Observable<Influencer[]> {
    return this.http.get<Influencer[]>(baseUrl+'/influencers?_t=3&_o=instagramFollowers,DESC');
  }
  getInfluencers():Observable<Influencer[]> {
    return this.http.get<Influencer[]>(baseUrl+'/influencers?_o=instagramFollowers,DESC');
  }
  getUserLocalStorage(){
    return localStorage.getItem('USER_INFO');
  }
  removeUserLocalStorage(){
    localStorage.removeItem('USER_INFO');
  }

  

  public signIn(userData: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  getInfluencer(id: any): Observable<any>{
    let headers =  this.getHeaders()
    return this.http.get(baseUrl+'/influencers/'+id, {headers});
  }
  getFavorites(): Observable<any>{
    let headers =  this.getHeaders()
    return this.http.get(baseUrl+'/favorites/', {headers});
  }
  isFavorite(id: any){
    console.log(this.getFavorites())
  }
  addFavorite(id: any){
    let headers =  this.getHeaders()
    console.log('asdas', baseUrl+'/favorites/'+id , headers)
    return this.http.post(baseUrl+'/favorites/'+id, {}, {headers});
  }
  removeFavorite(id: any){
    let headers =  this.getHeaders()
    console.log('asdas', baseUrl+'/favorites/'+id, headers)

    return this.http.delete(baseUrl+'/favorites/'+id, {headers});
  }
  getProposals(): Observable<any>{
    let headers =  this.getHeaders()
    return this.http.get(baseUrl+'/proposals/', {headers});
  }
  doProposal(proposal: Proposal): Observable<any> {
    let headers =  this.getHeaders()
    return this.http.post(baseUrl+'/proposals', proposal,  {headers});
  }
  getIPublis(): Observable<any>{
    let headers =  this.getHeaders()
    return this.http.get(baseUrl+'/ipublis/', {headers});
  }

  /*get(id: any): Observable<Tutorial> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }*/
}


/*

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SharedService {
  private _todos = new BehaviorSubject<Todo[]>([]);
  private baseUrl = 'http://ec2-15-228-148-206.sa-east-1.compute.amazonaws.com/:4000/api/v1';
  private dataStore: { todos: Todo[] } = { todos: [] }; // store our data in memory
  readonly todos = this._todos.asObservable();


  constructor (
    private http: HttpClient
  ) {}

  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`);
  }

  getStates(){
    return this.http.get(this.apiPath+'/domains/states');
  }

}*/