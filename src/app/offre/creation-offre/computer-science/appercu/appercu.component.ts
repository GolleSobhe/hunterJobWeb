import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-appercu',
  templateUrl: './appercu.component.html',
  styleUrls: ['./appercu.component.css']
})
export class AppercuComponent implements OnInit {

  offreData: any;

  constructor(public dialogRef: MatDialogRef<AppercuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.offreData = data;
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
