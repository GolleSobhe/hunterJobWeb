import { Component } from '@angular/core';

import { MatDialog } from '@angular/material';
import { ConfirmEmailMessageComponent } from './confirm-email-message/confirm-email-message.component';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmEmailMessageComponent, {
      width: '250px',
      data: {label: "check-email", message: "Veuillez consulter vos mails pour valider votre inscription"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result");
    });
  }

}
