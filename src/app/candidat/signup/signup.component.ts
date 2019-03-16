import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CandidatService } from '../candidat.service';
import { MustMatch } from './match.password.validator';

@Component({
  selector: 'comp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private candidatService: CandidatService) { }

  ngOnInit() {
    this.signUpForm();
  }

  signUpForm() {
    this.userForm = this.formBuilder.group({
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  signUp() {
    if (this.userForm.valid) {
      let user = this.userForm.value;
      //TODO: delete 'confirmPassword' and create user with service
      console.log(user);
      this.userForm.reset();
    }
  }
}