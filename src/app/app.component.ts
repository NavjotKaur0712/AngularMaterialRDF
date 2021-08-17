import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fileNameDialogRef!: MatDialogRef<DialogComponent>;
constructor(public dialog: MatDialog) {}

openDialog() {
  this.fileNameDialogRef = this.dialog.open(DialogComponent,{
    minHeight:'400px',
    minWidth:'300px'
  });
 
}

 
//   userForm= new FormGroup({
//     name: new FormControl('Brandon',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
//     email: new FormControl(),
//     address: new FormGroup({
//      street: new FormControl(),
//      city: new FormControl(),
//      pincode: new FormControl(),
//     })
//     });
   
//     onSubmit(){
//       console.log(this.userForm);
//     }

// }
   



}
