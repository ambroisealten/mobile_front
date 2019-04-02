import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userName: string;
  userFirstName: string;
  userEmail: string;
  userPswd: string;
  userPswdCheck: string;

  constructor() { }

  ngOnInit() {
  }

  onSignup() {
    
  }
}
