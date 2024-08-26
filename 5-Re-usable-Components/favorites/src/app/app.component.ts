import { Component } from '@angular/core';

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

  onFavoriteChange(){
    console.log("favorite changed.")
  }
 
}
