import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // used to set validators
  validatingForm: FormGroup;
  submitted = false;

  userEmail: string;
  userPswd: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validatingForm =this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.validatingForm.controls; }

  onConnect() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.validatingForm.invalid) {
      return;
    }

    this.userEmail = this.validatingForm.value.email;
    this.userPswd = sha512.sha512(this.validatingForm.value.password);
  }

}
