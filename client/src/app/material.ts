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
  MatDialogModule
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
    MatDialogModule

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
    MatDialogModule
  ],
})

export class MaterialModule { }
