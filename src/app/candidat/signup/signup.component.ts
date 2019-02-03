import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CandidatService } from '../candidat.service';

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
      password: ['', [Validators.required]],
      isRecruiter: [false, [Validators.nullValidator]]
    });
  }

  signUp() {
    if (this.userForm.valid) {
      let user = this.userForm.value;
      console.log(user);
    }
  }
}