import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-poputsearch',
  templateUrl: './poputsearch.component.html',
  styleUrls: ['./poputsearch.component.scss']
})
export class PoputsearchComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PoputsearchComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
