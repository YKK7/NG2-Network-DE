import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule} from 'angularfire2/auth';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private location: Location) {
  }
  ngOnInit() {
  }

  onSubmit(form) {
    if (form.valid) {
      this.angularFireAuth.auth
        .signInWithEmailAndPassword(form.value.email,
          form.value.password)
        .then(_ => this.routeToOrginizePage())
        .catch( (error) => {
          this.errorMessage =  error['message'];
      })
    }
  }

  private routeToOrginizePage() {
    this.location.back();
  }
}

