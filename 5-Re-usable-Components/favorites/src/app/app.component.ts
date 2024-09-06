import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: 'Here is the body of tweet...',
    isLiked: false,
    likesCount: 20
  }

  onFavoriteChange(eventArgs: FavoriteChangeEventArgs){
    console.log("favorite changed.", eventArgs)
  }
 
}
