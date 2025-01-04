import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})

export class LoginFormComponent {
  loginForm = new FormGroup({
    account: new FormGroup({
      'username': new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            UsernameValidators.cannotContainSpace,
          ],
          // Apply async validator here
          UsernameValidators.shouldBeUnique 
        ),
          'password': new FormControl('', Validators.required),
    })
  });

  login(){
    this.loginForm.setErrors({
      inValidLogin: true
    })

    /*
    if you connect api such as 'authService'
    let isValid = authService.login(this.loginForm.value);
    if(!isValid){
      this.loginForm.setErrors({
        inValidLogin: true
      })
    }
    */
  }

  get username(){
    return this.loginForm.get('account.username') as FormControl | null;
  }
}
