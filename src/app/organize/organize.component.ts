import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {NgForm} from '@angular/forms';
import {User} from 'firebase/app';
import {NgDateRangePickerOptions} from 'ng-daterangepicker';

declare var gapi: any;

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.css']
})
export class OrganizeComponent implements OnInit {

  events: FirebaseListObservable<any[]>;
  isLoggedIn: boolean;
  currentUser: User;
  value: string;
  options: NgDateRangePickerOptions;

  //Time picker fields
  startTime: Date;
  endTime: Date;
  mstep: number = 15;

  /* Google Calender API - get it from the console */
  CLIENT_ID = '728159288208-inlm56jmebtrjt7rejashvm81kim60rp.apps.googleusercontent.com';
  DISCOVERY_DOCS: string[] = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
  SCOPES  = 'https://www.googleapis.com/auth/calendar.readonly';

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.events = db.list('events');
    this.currentUser = this.angularFireAuth.auth.currentUser
    if (this.currentUser != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    this.options = {
      theme: 'default',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'yMd',
      outputFormat: 'MM/DD/YYYY',
      startOfWeek: 1
    };

    //initializes time pickers to 8:00AM
    let d = new Date();
    d.setHours(8);
    d.setMinutes(0);
    this.startTime = d;
    this.endTime = d;
  }


  onSubmit(form) {
    // this.handleClientLoad();
    if (form.valid) {
      console.log(form.value);
      if (this.angularFireAuth.auth.currentUser == null) {
        console.log('User not logged in. try to login');
        this.angularFireAuth.auth.signInWithEmailAndPassword(form.value.email,
          'testPwd123').catch(function (error) {
          console.log(error);
        });
      }
      this.addEventData(form);
    }
  }

  addEventData(form) {
    console.log('adding data');
    this.events.push({firstName: form.value.firstName})
      .then(_ => console.log('add successful'))
      .catch(err => console.log(err, 'Add failure'));
  }

  /*  set of methods to create connection to Google calender */
  handleClientLoad() {
    gapi.load('client:auth2',_ => this.initClient)
      .catch((error) => console.log(error));
  }

   initClient() {
  gapi.client.init({
    discoveryDocs: this.DISCOVERY_DOCS,
    clientId: this.CLIENT_ID,
    scope: this.SCOPES
  }).then( _ =>
     this.listUpcomingEvents())
    .catch((error) => console.log(error));
}

  listUpcomingEvents() {
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then( (response) => {
      const events = response.result.items;
      this.appendPre('Upcoming events:');
      if (events.length > 0) {
        for ( const event of events){
          let when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
          this.appendPre(event.summary + ' (' + when + ')')
        }
      } else {
        this.appendPre('No upcoming events found.');
      }
    })
      .catch((error) => console.log(error));
  }

  appendPre(message: String) {
    console.log(message);
  }


}
