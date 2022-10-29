import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  modeType(input: string) {
    if (input == 'news') {
      return this.getTop500();
    } else if (input == 'ask') {
      return this.getTop200Ask();
    }
    else if (input == 'show') {
      return this.getTop200Show();
    }
    else {
      return this.getTop200Job();
    }
  }


  getTop500() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  }

  getStoryById(id: any): Observable<any> {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  }

  getCommentById(id: any) {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  }

  getUserByName(id: any) {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
  }

  getTop200Ask() {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`)
  }
  getTop200Job() {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty`)
  }
  getTop200Show() {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty`)
  }

}
