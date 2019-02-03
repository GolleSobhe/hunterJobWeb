import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private candidatService: CandidatService) { }

  ngOnInit() {
    this.signInForm();
  }

  signInForm() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  signIn() {
    if (this.userForm.valid) {
      let user = this.userForm.value;
      console.log(user);
    }
  }
}
