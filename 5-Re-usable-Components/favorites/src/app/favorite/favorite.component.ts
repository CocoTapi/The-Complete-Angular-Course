import { Component, EventEmitter, Input, OnInit, output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent implements OnInit{
  @Input('isFavorite') isFavorite: boolean = false;
  //@Input('is-favorite') isFavorite: boolean = false

  // @output() change = new EventEmitter();

  // constructor(){}

  ngOnInit(): void {
    
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}
