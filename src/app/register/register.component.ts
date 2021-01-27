import { Component, OnInit } from '@angular/core';
import {SchtroumpfsService} from '../services/schtroumpfs.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MustMatch} from '../../helpers/must-match.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public api: SchtroumpfsService, public auth: AuthService, public router: Router, private formBuilder: FormBuilder) { }
  public users;
  submitted = false;

  registerForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }


  goToLogin(){
    this.auth.log = true;
    this.router.navigate(['login']);
  }

  register(value: any) {
    this.submitted = true;
    const payload = {
      firstname: value.firstname,
      lastname: value.lastname,
      username: value.username,
      email: value.email,
      password: value.password,
    };

    this.api.register(payload)
      .subscribe(
        data => {
          this.users = data;
          return true;
        }
      );

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.goToLogin();
  }


}
