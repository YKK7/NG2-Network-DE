import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 39.7391;
  lng: number = -75.5398;
  constructor() { }

  ngOnInit() {
  }

}
