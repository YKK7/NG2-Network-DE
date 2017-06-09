import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


//   $(document).ready(function(){
//   $.ajax(
//     {
//       url: 'https://data.nationalservice.gov/resource/5vrv-88b8.json',
//       type: "get",
//       data: {location_name:'Delaware'},
//       contentType: "application/json; charset=utf-8",
//       dataType: "json",
//       cache: false,
//       success: function (data) {
//         var trHTML = '';
//         $.each(data, function (i, item) {
//           trHTML += '<tr><td>'+ item.location_name   +'</td><td>'+ item.location_type + '</td><td>' + item.value_category + '</td><td>' +  item.value_name +'</td><td>'+ item.location.coordinates[0]+','+ item.location.coordinates[1]  +'</td></tr>';
//         });
//         $('#location').append(trHTML);
//       },
//       error: function (msg) {
//         alert(msg.responseText);
//       }
//     });
// })

}
