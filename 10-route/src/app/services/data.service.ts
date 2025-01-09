import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app.error';
import { DATA_SERVICE_URL } from './service.token';
import { PostResponse } from '../common/types';
import { NotFoundError } from '../common/not-found.error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(DATA_SERVICE_URL) private url: string, private http: HttpClient){}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
        catchError((error) => this.handleError(error))
    );
  }

  create(post: any): Observable<PostResponse> {
    return this.http.post<PostResponse>(this.url, post).pipe(
      catchError((error) => this.handleError(error))
    ) as Observable<PostResponse>;
  }

  update(post: any): Observable<any>{
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  delete(id: number): Observable<any>{    
    return  this.http.delete(this.url + '/' + id).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: Response): Observable<any[]> {
    if (error.status === 404) {
      return throwError(() => new NotFoundError());
    }
    
    return throwError(() => new AppError(error));
  }

}


