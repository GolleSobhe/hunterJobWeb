import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../dalog-data';

@Component({
  selector: 'app-confirm-email-message',
  templateUrl: './confirm-email-message.component.html',
  styleUrls: ['./confirm-email-message.component.css']
})
export class ConfirmEmailMessageComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ConfirmEmailMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
