import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from 'angular2-google-maps/core';
import {} from '@types/googlemaps';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
constructor() { }

  ngOnInit() {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.7391, lng: -75.5398},
          zoom: 10,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        const input = document.getElementById('pac-input');
        const searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        let markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          const places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          const bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log('Returned place contains no geometry');
              return;
            }
            const icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });

    this.setAnimalMarkers(map);
    this.setArtMarkers(map);
    this.setMentorMarkers(map);
    this.setElderlyMarkers(map);
    this.setCommunityMarkers(map);
  }


  private setAnimalMarkers(map: google.maps.Map) {
    const animals = [
      ['Faithful Friends Animal Society', 39.729884, -75.579206, 4],
      ['Reasonable Rescue', 39.714426, -75.665008, 5],
      ['Delaware Human Association', 39.735494, -75.543044, 3],
      ];

    const image = {
      url: 'http://people.wm.edu/~mxblum/icons/zoo.png',
      size: new google.maps.Size(30, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };

    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };

    for (let i = 0; i < animals.length; i++) {
      const animal = animals[i];
      const marker = new google.maps.Marker({
        position: {lat: animal[1], lng: animal[2]},
        map: map,
        icon: image,
        shape: shape,
        title: animal[0],
        zIndex: animal[3]
      });
    }
  }

  private setArtMarkers(map: google.maps.Map) {
    const arts = [
      ['Delaware Children\'s Theater' , 39.751702, -75.556188, 2],
    ];

    const image = {
      url: 'http://people.wm.edu/~mxblum/icons/museum.png',
      size: new google.maps.Size(30, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };

    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };

    for (let i = 0; i < arts.length; i++) {
      const art = arts[i];
      const marker = new google.maps.Marker({
        position: {lat: art[1], lng: art[2]},
        map: map,
        icon: image,
        shape: shape,
        title: art[0],
        zIndex: art[3]
      });
    }
  }

  private setMentorMarkers(map: google.maps.Map) {
    const mentors = [
      ['Delaware Mentoring Community', 39.745728, -75.548835, 3]
    ];

    const image = {
      url: 'http://people.wm.edu/~mxblum/icons/school.png',
      size: new google.maps.Size(30, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };

    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };

    for (let i = 0; i < mentors.length; i++) {
      const mentor = mentors[i];
      const marker = new google.maps.Marker({
        position: {lat: mentor[1], lng: mentor[2]},
        map: map,
        icon: image,
        shape: shape,
        title: mentor[0],
        zIndex: mentor[3]
      });
    }
  }
  private setElderlyMarkers(map: google.maps.Map) {
    const elderly = [
      ['Brandywine Senior Center', 39.802441, -75.465547, 2],
     ];

    const image = {
      url: 'http://people.wm.edu/~mxblum/icons/icons/girlfriend.png',
      size: new google.maps.Size(30, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };

    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };

    for (let i = 0; i < elderly.length; i++) {
      const elder = elderly[i];
      const marker = new google.maps.Marker({
        position: {lat: elder[1], lng: elder[2]},
        map: map,
        icon: image,
        shape: shape,
        title: elder[0],
        zIndex: elder[3]
      });
    }
  }
  private setCommunityMarkers(map: google.maps.Map) {
    const communities = [
      ['United Way of Delaware', 39.743089, -75.551465, 2],
    ];

    const image = {
      url: 'http://people.wm.edu/~mxblum/icons/icons/hostel.png',
      size: new google.maps.Size(30, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };

    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };

    for (let i = 0; i < communities.length; i++) {
      const community = communities[i];
      const marker = new google.maps.Marker({
        position: {lat: community[1], lng: community[2]},
        map: map,
        icon: image,
        shape: shape,
        title: community[0],
        zIndex: community[3]
      });
    }
  }
}

