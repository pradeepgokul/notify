import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatTableModule,
  MatDividerModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule
  ],
})

export class MaterialModule { }
