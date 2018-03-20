import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

    constructor(private dialog: MatDialog) { }


    public custom(component: any, model?: any, title?: string): Observable<any> {
        let dialogRef: MatDialogRef<any>;

        dialogRef = this.dialog.open(component);
        dialogRef.componentInstance.model = model;
        dialogRef.componentInstance.title = title;

        return dialogRef.afterClosed();
    }

}
