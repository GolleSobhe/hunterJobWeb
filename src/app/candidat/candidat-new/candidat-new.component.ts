import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidat-new',
  templateUrl: './candidat-new.component.html',
  styleUrls: ['./candidat-new.component.css']
})
export class CandidatNewComponent implements OnInit {
  isLinear = false;
  candidatEtape1FormGroup: FormGroup;
  candidatEtape2FormGroup: FormGroup;
  candidatEtape3FormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.candidatEtape1FormGroup = this._formBuilder.group({
    });
    this.candidatEtape2FormGroup = this._formBuilder.group({
    });
    this.candidatEtape3FormGroup = this._formBuilder.group({
    });
  }

}
