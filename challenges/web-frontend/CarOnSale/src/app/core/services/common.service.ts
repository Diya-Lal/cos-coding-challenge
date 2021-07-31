import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private dialog: MatDialog) { }

  openDialog(dialogData:any) {
    this.dialog.open(ErrorDialogComponent, {
      data : {
        title : dialogData.title,
        message : dialogData.message
      }
    })
  }
}
