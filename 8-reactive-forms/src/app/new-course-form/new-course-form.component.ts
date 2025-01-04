import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  standalone: true,
  imports: [NgFor],
  templateUrl: './new-course-form.component.html',
  styleUrl: './new-course-form.component.scss'
})
export class NewCourseFormComponent {
  newCourseForm = new FormGroup({
    topics: new FormArray([])
  })


  get topics(): FormArray {
    return this.newCourseForm.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement): void {
    console.log('addTopic called'); // Log to confirm method execution
    console.log('Input value:', topic.value); // Log the input value

    if (topic.value.trim()) { // Ensure the input is not empty or whitespace
      this.topics.push(new FormControl(topic.value));
      topic.value = ''; // Clear input
    }
  }

  removeTopic(index: number): void{
    this.topics.removeAt(index);
  }
}
