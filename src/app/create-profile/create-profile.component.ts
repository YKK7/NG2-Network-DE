import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  errorMessage: string;

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
   }
  ngOnInit() {
  }
  onSubmit(form) {
    if (form.valid) {
      this.createProfile(form)
    }
  }
  private createProfile(form) {
    console.log('adding data');
    this.angularFireAuth.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
      .catch( (error) => {
        this.errorMessage =  error['message'];
        return;
      })
    const emailWithoutDot = form.value.email.replace(/\./g, '_');
    this.db.database.ref('profiles/' + emailWithoutDot).set({firstName: form.value.firstName,
      lastName: form.value.lastName,
      phoneNumber: form.value.phoneNumber,
      address: form.value.address,
      city: form.value.city,
      state: form.value.state,
      zipcode: form.value.zipcode,
      email: form.value.email
    })
      .then(_ => this.errorMessage = 'Profile Added successfully ')
      .catch(error =>  this.errorMessage = error['message']);
  }
}




