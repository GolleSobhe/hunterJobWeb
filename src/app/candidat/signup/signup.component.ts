import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CandidatService } from '../candidat.service';
import { MustMatch } from './match.password.validator';
import { Utilisateur } from '../candidat';
import { Router } from '@angular/router';

@Component({
  selector: 'comp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private candidatService: CandidatService, private router: Router) { }

  ngOnInit() {
    this.signUpForm();
  }

  signUpForm() {
    this.userForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  signUp() {
    if (this.userForm.valid) {
      let formValue = this.userForm.value;
      let user: Utilisateur = {
        nom: formValue.nom,
        prenom: formValue.prenom,
        email: formValue.email,
        motDePasse: formValue.password
      }
      //TODO: delete 'confirmPassword' and create user with service

      this.candidatService.signUp(user).subscribe((userCreated: Utilisateur) => {
        //TODO: Do something

        this.router.navigate(['../../consult-email']);
        this.userForm.reset();
      });
    }
  }
}