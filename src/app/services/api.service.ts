import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  // This method signature is already correct.
  modeType(input: string): Observable<number[]> {
    if (input === 'news') {
      return this.getTop500();
    } else if (input === 'ask') {
      return this.getTop200Ask();
    } else if (input === 'show') {
      return this.getTop200Show();
    } else { // Assuming this is for 'jobs'
      return this.getTop200Job();
    }
  }

  // --- ADD TYPES TO THE RETURN VALUE OF EACH METHOD ---

  getTop500(): Observable<number[]> {
    return this.http.get<number[]>('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
  }

  getStoryById(id: any): Observable<any> {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  }

  getCommentById(id: any): Observable<any> {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  }

  getUserByName(id: any): Observable<any> {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
  }

  getTop200Ask(): Observable<number[]> {
    return this.http.get<number[]>(`https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`);
  }

  getTop200Job(): Observable<number[]> {
    return this.http.get<number[]>(`https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty`);
  }

  getTop200Show(): Observable<number[]> {
    return this.http.get<number[]>(`https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty`);
  }
}