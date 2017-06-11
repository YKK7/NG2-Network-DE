import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {NgForm} from '@angular/forms';
import {User} from 'firebase/app';


@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.css']
})
export class OrganizeComponent implements OnInit {

  events: FirebaseListObservable<any[]>;
  isLoggedIn: boolean;
  currentUser: User;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.events = db.list('events');
    this.currentUser =  this.angularFireAuth.auth.currentUser
    if (this.currentUser != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.valid) {
      console.log(form.value);
      if (this.angularFireAuth.auth.currentUser == null) {
        console.log('User not logged in. try to login');
        this.angularFireAuth.auth.signInWithEmailAndPassword(form.value.email,
          'testPwd123').catch(function (error) {
          console.log(error);
        });
      }
      // if (this.angularFireAuth.auth.app === null) {
      //   console.log('User not logged in. Show login page');
      // this.angularFireAuth.auth.createUserWithEmailAndPassword(form.value.email,
      //   'testPwd123');
      // }
      this.addEventData(form);
    }
  }

  addEventData(form) {
    console.log('adding data');
    this.events.push({firstName: form.value.firstName})
      .then(_ => console.log('add successful'))
      .catch(err => console.log(err, 'Add failure'));
  }
}
