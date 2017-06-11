import { Component, OnInit } from '@angular/core';
import {AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule} from 'angularfire2/auth';
import { Location } from '@angular/common';


@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private angularFireAuth: AngularFireAuth, private location: Location) {
  }
  ngOnInit() {
  }

  public logout() {
    this.angularFireAuth.auth.signOut();
    location.reload();
  }

}


