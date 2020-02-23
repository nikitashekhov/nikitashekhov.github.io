import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Post} from '../medium/post';


@Injectable({
  providedIn: 'root'
})
export class MediumService {
  private mediumUrl = 'https://api.rss2json.com/v1/api.json?' +
    'api_key=nfjaqukasbgz2ahupai96ojkwfajort2brsoutg7' +
    '&rss_url=https://medium.com/feed/@nikitashekhov' +
    '&count=50';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.mediumUrl)
      .pipe(
        tap(_ => console.log('fetched posts')),
        map( data => {
          const items = data['items'];
          return items.map((post: any) => {
            return {
              link: post.link,
              title: post.title,
              description: post.description,
              date: post.pubDate,
              categories: post.categories
            };
          });
        }),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
