import { Component, OnInit } from '@angular/core';
import {SchtroumpfsService} from '../services/schtroumpfs.service';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private api: SchtroumpfsService, public auth: AuthService, public router: Router, private formBuilder: FormBuilder) { }
  public token;
  submitted = false;
  public user = false;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() { return this.loginForm.controls; }

  login(value: any) {
     const payload = {
      email: value.email,
      password: value.password
    };

     this.api.login(payload)
      .subscribe(data => {
        this.token = data['token'];
        this.auth.setToken(this.token);
      });

     if (!this.auth.isLoggedIn()) {
       this.user = true;
     }

     this.submitted = true;

    // stop here if form is invalid
     if (this.loginForm.invalid) {
      return;
    }

     this.router.navigate(['schtroumpf']);


  }

}
