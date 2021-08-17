import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
 
  userForm= new FormGroup({
    name: new FormControl('Brandon',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    email: new FormControl(),
    address: new FormGroup({
     street: new FormControl(),
     city: new FormControl(),
     pincode: new FormControl(),
    })
    });
   
  
  ngOnInit() { }

  onSubmit(){
    console.log(this.userForm.value);
  }
}
