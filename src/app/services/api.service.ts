import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }


  getTop500(){
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  }

  getStoryById(id: any):Observable<any>{
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  }

  getCommentById(id:any){
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  }

  getUserByName(id:any){
    return this.http.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
  }

}
