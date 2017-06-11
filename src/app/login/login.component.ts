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
          if (error['code'] === 'auth/user-not-found') {
            this.createNewUser(form.value.email,
              form.value.password);
          }
      })
    }
  }

  // don't create user here automatically, it has to be created with user profile info as well.
  private createNewUser(email, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch (function (error){
        this.errorMessage = error['message'];
        console.log(error);
      })
  }

  private routeToOrginizePage() {
    this.location.back();
  }
}

