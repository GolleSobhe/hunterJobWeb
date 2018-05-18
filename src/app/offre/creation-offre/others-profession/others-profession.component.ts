import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-others-profession',
  templateUrl: './others-profession.component.html',
  styleUrls: ['./others-profession.component.css']
})
export class OthersProfessionComponent implements OnInit, OnChanges {

  @Input() profession: string;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {

  }
}
