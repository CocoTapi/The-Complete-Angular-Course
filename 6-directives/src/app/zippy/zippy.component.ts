import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'zippy',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {
  @Input('title') title: string = '';

  isExpanded: boolean = false;

  toggle(){
    this.isExpanded = !this.isExpanded;
  }
}
