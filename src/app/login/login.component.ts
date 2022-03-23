import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern("[a-zA-z]*"),Validators.minLength(5)]),
    pass : new FormControl('',[Validators.pattern("((?=.*[a-z])(?=.*[A-Z]).{8,30})"),Validators.required]) 
  })

  get name()
  {
    return this.LoginForm.get("name");
  }

  get pass()
  {
    return this.LoginForm.get("pass");
  }


  constructor() { }

  ngOnInit(): void {
  }

}
