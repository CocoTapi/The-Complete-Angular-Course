import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
  styles: [
    `
      h1 {
        background: skyblue;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated, //this help the styles above and in /favorite/component.css apply only in this component/html. 
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean = false;
  //@Input('is-favorite') isFavorite: boolean = false

  // 'change' has to be same as app.html 
  @Output('change') click = new EventEmitter();

  // constructor(){}


  onClick() {
    this.isSelected = !this.isSelected;

    // pass event data (just boolean) to the other component
    // this.click.emit(this.isSelected);

    // pass event data (object)
    this.click.emit({ newValue: this.isSelected })
  }
}

export interface FavoriteChangeEventArgs {
  newValue: boolean;
};
