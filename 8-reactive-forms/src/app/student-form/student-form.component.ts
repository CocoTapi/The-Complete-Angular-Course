import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'student-form',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  //cleaner way to build form
  studentForm: FormGroup;

  constructor(fb: FormBuilder){
    this.studentForm = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([])
    })
  }

  /*
  without form builder class

  studentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
    }),
    topics: new FormArray([])
  })
    */

  get topics(): FormArray {
    return this.studentForm.get('topics') as FormArray;
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
