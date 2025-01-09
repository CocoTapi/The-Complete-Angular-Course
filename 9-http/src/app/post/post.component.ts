import { NgFor } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { PostResponse } from '../common/types';
import { BadInputError } from '../common/bad-input.error';

@Component({
  selector: 'post',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  // private url = 'https://jsonplaceholder.typicode.com/posts'

 // Use private to assign HttpClient to the class property
  constructor(private service: PostService) {
   //Do not call fetch request here
  }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (response) => {
        console.log('Posts fetched:', response);
        this.posts = response; // Assign response to posts
      },
      complete: () => {
        console.log('HTTP request completed.'); // Optional
      }
    })

    // this.fetchPosts();
  }

  // Fetch posts using a separate method for clarity
  // fetchPosts(): void {
  //   this.http.get<any[]>(this.url).subscribe({
      // next: (response) => {
      //   console.log('Posts fetched:', response);
      //   this.posts = response; // Assign response to posts
      // },
      // error: (err) => {
      //   console.error('Error fetching posts:', err); // Handle errors
      // },
      // complete: () => {
      //   console.log('HTTP request completed.'); // Optional
      // }
  //   }
  //     /*
  //     this is old way
  //     (response) => {
  //     this.posts = response; // Assign the response directly to the posts array
  //     },
  //     (error) => {
  //     console.error('Error fetching posts:', error); // Handle errors if any
  //     }
  //     */
  //   );
  // }

  createPost(input: HTMLInputElement){
    let post: any = { title: input.value };
    //optimistic update
    this.posts.splice(0, 0, post)

    input.value = '';

    this.service.create(post).subscribe({
      next: (response: PostResponse) => {
        console.log(response);
        post.id = response.id;
        // this.posts.splice(0, 0, post)
      },
      error: (err: AppError) => {
        //when optimistic update failed
        this.posts.splice(0, 1)

        if(err instanceof BadInputError){
          //this.form.setErrors(err.originalError);
        } else {
          throw err;
        }
      }
    })
  }

  updatePost(post: HTMLInputElement){
    this.service.update(post).subscribe({
      next: (response) => {
        console.log("patch request submitted:", response);
      }
    })
  }

  deletePost(post: HTMLInputElement){
    //optimistic update
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

   this.service.delete(parseInt(post.id)).subscribe({
      next: (response) => {
        console.log("delete request submitted:", response);
        // let index = this.posts.indexOf(post);
        // //if you send only id, 
        // // let index = this.posts.findIndex(post => post.id === postId)
        // this.posts.splice(index, 1);
      },
      error: (err: AppError) => {
        //when optimistic update failed
        this.posts.splice(index, 0, post);
        if(err instanceof NotFoundError){
          alert('This post has already been deleted.')
        } else {
          throw err;
        }
      }
    })
  }
}


