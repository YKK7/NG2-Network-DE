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
          zoom: 9,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        const input = document.getElementById('pac-input');
        const searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds())
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
              bounds.union(place.geometry.viewport)
      
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
      ['Response-A-Bull Rescue', 39.714426, -75.665008, 5],
      ['Delaware Humane Association', 39.735494, -75.543044, 3],
      ];

      var infoWindowContent = [
        ['<div class= "info content">' +
        '<h3> Faithful Friends Animal Society</h3>'+ 
        '<p> Dog walkers needed to provide our rescues daily exercise<p>'+
        '<p><b>Date:</b>Daily, Mon-Fri</p>'+
        '<p><b>Time:</b>Flexible</p>'+
        '<p><b>Contact:</b>Just show up!</p>'+
        '<p><b>Address:</b> 12 Germay Dr, Wilmington, DE 19804</p>'+
        '<p><a href= "https://www.google.com/maps/place/Faithful+Friends+Animal+Society/@39.7298761,-75.5811517,17z/data=!3m1!4b1!4m5!3m4!1s0x89c7027f455328ed:0x15311f277d946a1a!8m2!3d39.729872!4d-75.578963">Get Directions</a></p>'+
        '</div>'],
        ['<div class= "info content">' +
        '<h3> Response-A-Bull Rescue</h3>'+
        '<p> Volunteers needed to foster lovable dogs <p>'+
        '<p><b>Date: </b>Open</p>'+
        '<p><b>Time: </b>Open</p>'+
        '<p><b>Contact: </b><a href="mailto:kimResponse@email.com">Kim Goody</a></p>'+
        '<p><b>Address:</b>2040 Telegraph Rd, Wilmington, DE 19808</p>'+
        '<p><a href= "https://www.google.com/maps/place/Response-A-Bull+Rescue+Inc,+2040+Telegraph+Rd,+Wilmington,+DE+19808/@39.7145502,-75.7350572,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c701b30ddd450d:0x392f8037e87ec786!2m2!1d-75.6650166!2d39.7144392">Get Directions</a></p>'+
        
        '</div>'],
        ['<div class= "info content">' +
        '<h3> Delaware Humane Association</h3>'+
        '<p> Read To A Cat Adoption Event!  Read your favorite book to a shelter sweetheart or adopt one of your own!<p>'+
        '<p><b>Date: </b>Saturday, June 24th, 2017</p>'+
        '<p><b>Time: </b>12:00PM-8:00PM</p>'+
        '<p><b>Contact:</b>Just show up!</p>'+
        '<p><b>Address:</b>701 A St, Wilmington, DE 19801</p>'+
                '<p><a href= "https://www.google.com/maps/place/Delaware+Humane+Association/@39.7324312,-75.5492053,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6fd5c2193158d:0x5cb8aa95c76a32ba!8m2!3d39.7324271!4d-75.5470166">Get Directions</a></p>'+
        '</div>']
      


      ];
      var infoWindow= new google.maps.InfoWindow(), marker, i;

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

      google.maps.event.addListener(marker, 'click', (function(marker, i){
        return function(){
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        }
      })(marker, i))
    }
  }

  private setArtMarkers(map: google.maps.Map) {
    const arts = [
      ['Delaware Children\'s Theater' , 39.751702, -75.556188, 2],
    ];

    var infoWindowContent = [
        ['<div class= "info content">' +
        '<h3> Delaware Children\'s Theater</h3>'+ 
        '<p> Costume Drive for Upcoming Performance of Aladdin Jr.  Donations Welcome!<p>'+
        '<p><b>Date:</b>Saturday, July 1st, 2017 </p>'+
        '<p><b>Time:</b>10:00AM-6:00PM</p>'+
        '<p><b>Contact:</b>Just show up!</p>'+
        '<p><b>Address:</b> 1014 Delaware Ave, Wilmington, DE 19806</p>'+
        '<p><a href= "https://goo.gl/maps/nDct5Hyh9QR2">Get Directions</a></p>'+
        '</div>']
      ];
      var infoWindow= new google.maps.InfoWindow(), marker, i;

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
      google.maps.event.addListener(marker, 'click', (function(marker, i){
        return function(){
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        }
      })(marker, i))
    }
  }

  private setMentorMarkers(map: google.maps.Map) {
    const mentors = [
      ['Delaware Mentoring Community', 39.745728, -75.548835, 3]
    ];
    var infoWindowContent = [
        ['<div class= "info content">' +
        '<h3> Delaware Mentoring Community</h3>'+ 
        '<p> Become A Mentor Information Meeting:<br>  Attend this information session to learn about mentoring opportunities near you! Open to public.  Contact with questions.<p>'+
        '<p><b>Date:</b>Thursday, June 29, 2017 </p>'+
        '<p><b>Time:</b>6:00PM-8:00PM</p>'+
        '<p><b>Contact:</b><a href="mailto:helpmentorde@email.com">Pete Passwater</a></p>'+
        '<p><b>Address:</b>100 W 10th Street Wilmington, DE 19801</p>'+
        '<p><a href= "https://goo.gl/maps/PYra5t18GVG2">Get Directions</a></p>'+
        '</div>']
      ];
      var infoWindow= new google.maps.InfoWindow(), marker, i;
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
      google.maps.event.addListener(marker, 'click', (function(marker, i){
        return function(){
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        }
      })(marker, i))
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

