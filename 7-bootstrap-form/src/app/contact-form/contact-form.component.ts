import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactMethod {
  id: number,
  name: string
}

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactMethods: ContactMethod[] = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'phone' },

  ]

  log(x: any){
    console.log(x);
  }
  
  submit(f: any){
    console.log(f.value);
  }
}
