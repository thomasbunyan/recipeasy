import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatSnackBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatListModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatSlideToggleModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
