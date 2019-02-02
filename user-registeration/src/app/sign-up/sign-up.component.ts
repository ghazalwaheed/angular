import { Component, OnInit } from '@angular/core';
import { user } from './shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
user:user;
  constructor() {
    console.log(user);
   }

  ngOnInit() {
  }

}
