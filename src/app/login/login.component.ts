import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      // private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
  }

}
