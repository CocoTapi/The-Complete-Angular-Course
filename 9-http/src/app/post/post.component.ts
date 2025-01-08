import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'post',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  posts: any[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts'

 // Use private to assign HttpClient to the class property
 constructor(private http: HttpClient) {
  // Call the fetchPosts method
  this.fetchPosts();
  }

  // Fetch posts using a separate method for clarity
  fetchPosts(): void {
    this.http.get<any[]>(this.url).subscribe({
      next: (response) => {
        console.log('Posts fetched:', response);
        this.posts = response; // Assign response to posts
      },
      error: (err) => {
        console.error('Error fetching posts:', err); // Handle errors
      },
      complete: () => {
        console.log('HTTP request completed.'); // Optional
      }
    }
      /*
      this is old way
      (response) => {
      this.posts = response; // Assign the response directly to the posts array
      },
      (error) => {
      console.error('Error fetching posts:', error); // Handle errors if any
      }
      */
    );
  }

  createPost(input: HTMLInputElement){
    let post: any = { title: input.value };
    input.value = '';

    this.http.post<PostResponse>(this.url, JSON.stringify(post)).subscribe({
      next: (response) => {
        console.log(response);
        post.id = response.id;
        this.posts.splice(0, 0, post)
      }
    })
  }

  updatePost(post: HTMLInputElement){
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).subscribe({
      next: (response) => {
        console.log("patch request submitted:", response);
      }
    })
  }

  deletePost(post: HTMLInputElement){
    this.http.delete(this.url + '/' + post.id).subscribe({
      next: (response) => {
        console.log("delete request submitted:", response);
        let index = this.posts.indexOf(post);
        //if you send only id, 
        // let index = this.posts.findIndex(post => post.id === postId)
        console.log(index)
        this.posts.splice(index, 1);
      }
    })
  }
}

interface PostResponse {
  id: number;
}
