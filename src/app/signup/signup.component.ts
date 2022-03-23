import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('pass').value;
    let cPass = group.get('cpass').value
    return pass === cPass ? null : { notSame: true }
    }

  SignupForm =  new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    name : new FormControl('',[Validators.required,Validators.pattern("[a-zA-z]*"),Validators.minLength(5)]),
    mno : new FormControl('',[Validators.pattern("(0|91)?[7-9][0-9]{9}"),Validators.maxLength(10)]),
    pass : new FormControl('',[Validators.required,Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    cpass : new FormControl('',[Validators.required]),
  },{ validators: this.checkPasswords })
  
  get email()
  {
    return this.SignupForm.get("email");
  }

  get name()
  {
    return this.SignupForm.get("name");
  }

  get mno()
  {
    return this.SignupForm.get("mno");
  }
  get pass()
  {
    return this.SignupForm.get("pass");
  }
  get cpass()
  {
    return this.SignupForm.get("cpass");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
