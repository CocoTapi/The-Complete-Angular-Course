import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { PostResponse } from '../common/types';
import { BadInputError } from '../common/bad-input.error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient){}

  // Fetch posts using a separate method for clarity
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
        catchError((error) => this.handleError(error))
      );
  }

  createPost(post: any): Observable<PostResponse> {
    return this.http.post<PostResponse>(this.url, post).pipe(
      catchError((error) => this.handleError(error))
    ) as Observable<PostResponse>;
  }

  updatePost(post: any): Observable<any>{
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  deletePost(id: number): Observable<any>{
    return  this.http.delete(this.url + '/' + id).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: any): Observable<any[]> {
    if (error.status === 404) {
      return throwError(() => new NotFoundError());
    }

    if(error.status === 400) {
      return throwError(() => new BadInputError(error.json()));
    }
    return throwError(() => new AppError(error));
  }

}

