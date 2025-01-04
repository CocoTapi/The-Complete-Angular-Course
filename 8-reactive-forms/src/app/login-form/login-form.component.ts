import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})

export class LoginFormComponent {
  loginForm = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    'password': new FormControl('', Validators.required),
  });

  get username(){
    return this.loginForm.get('username') as FormControl | null;
  }
}
