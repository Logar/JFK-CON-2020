import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  ticket: FormControl;
  loginApiResponse: Boolean;
  submitted: Boolean;

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              public toast: ToastComponent) {
    this.ticket = new FormControl('', [
      Validators.required,
      Validators.minLength(7)
    ]);
  }

  ngOnInit() {
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      ticket: this.ticket
    });
    this.submitted = false;
  }

  getTicketValidation() {
    return { 'has-danger': !this.ticket.pristine && !this.ticket.valid };
  }

  login() {
    this.reset();
    this.submitted = true;

    this.loginApiResponse = this.auth.login(this.loginForm.value);
    if (this.loginApiResponse) {     
      window.location.href = '/home';
      setInterval(function() {
        location.reload();
      }, 500);
    }
  }

  reset() {
    this.submitted = false;
  }

}
