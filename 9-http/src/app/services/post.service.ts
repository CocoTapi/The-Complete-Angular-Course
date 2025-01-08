import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient){}

  // Fetch posts using a separate method for clarity
  getPosts() {
    return this.http.get<any[]>(this.url);
  }

  createPost(post: any){
    return  this.http.post<PostResponse>(this.url, JSON.stringify(post));
  }

  updatePost(post: any){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id: number){
    return  this.http.delete(this.url + '/' + id);
  }
}

interface PostResponse {
  id: number;
}