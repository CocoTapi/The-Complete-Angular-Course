import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Category {
  id: number,
  name: string
}

@Component({
  selector: 'assignment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss'
})
export class AssignmentComponent {
  isGuaranteed: boolean = false

  category: Category[] = [
    { id: 1, name: 'development'},
    { id: 2, name: 'Art'},
    { id: 3, name: 'Languages'},
  ];

  log(x: any){
    console.log(x);
  }

  submit(formValue: any){
    console.log(formValue);
  }
}
