import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';

import { MatSliderModule } from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
 import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatSelectModule ,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule
    
    
  ],
  
    // exports:[
    //   BrowserModule,
    // AppRoutingModule,
    // FormsModule, 
    // ReactiveFormsModule, BrowserAnimationsModule,
    // MatSliderModule,
    // MatAutocompleteModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatBadgeModule,
    // MatButtonModule,
    // MatIconModule,
    // MatDividerModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatButtonToggleModule,
    // MatNativeDateModule,
    // MatSelectModule ,
    // MatGridListModule,
    // MatListModule,
    // MatMenuModule,
    // MatRadioModule,
    // MatRippleModule,
    // MatSidenavModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatStepperModule,
    // MatTableModule,
    // MatDialogModule,
    // MatDatepickerModule
    
    // ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
