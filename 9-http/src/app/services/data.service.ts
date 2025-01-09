import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { PostResponse } from '../common/types';
import { BadInputError } from '../common/bad-input.error';
import { DATA_SERVICE_URL } from './service.token';

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

     //test for fail
    //  return throwError(() => new AppError('Test error message'));
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

    if(error.status === 400) {
      return throwError(() => new BadInputError(error.json()));
    }
    
    return throwError(() => new AppError(error));
  }

}

