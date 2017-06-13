import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var d3;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @ViewChild('bubbleChart') bubbleChart: ElementRef;
  host: any;

  constructor() {
  }

  ngOnInit() {
      this.host = d3.select(this.bubbleChart.nativeElement);
      this.setupGraph();
  }

  setupGraph(){
    this.host = new d3.svg.BubbleChart({
      supportResponsive: true,
      //container: => use @default
      size: 600,
      //viewBoxSize: => use @default
      innerRadius: 600 / 3.5,
      //outerRadius: => use @default
      radiusMin: 50,
      //radiusMax: use @default
      //intersectDelta: use @default
      //intersectInc: use @default
      //circleColor: use @default
      data: {
        items: [
          {text: "Coach, referee, supervise sports team", count: "0.06"},
          {text: "Tutor or teach", count: "0.14"},
          {text: "Mentor youth", count: "0.16"},
          {text: "Be an usher, greeter, or minister", count: "0.13"},
          {text: "Collect, prepare, distribute or serve food", count: "0.23"},
          {text: "Collect, make, or distribute clothing", count: "0.15"},
          {text: "Fundraise or sell items to raise money", count: "0.29"},
          {text: "Provide counseling, medical care, fire/EMS", count: "0.07"},
          {text: "Provide general office services", count: "0.15"},
          {text: "Provide professional or management", count: "0.17"},
          {text: "Engage in music, performance, or othe", count: "0.08"},
          {text: "Engage in general labor", count: "0.18"},
        ],
        eval: function (item) {return item.count;},
        classed: function (item) {return item.text.split(" ").join("");}
      },
      plugins: [
        {
          name: "central-click",
          options: {
            text: "(See more detail)",
            style: {
              "font-size": "12px",
              "font-style": "italic",
              "font-family": "Source Sans Pro, sans-serif",
              //"font-weight": "700",
              "text-anchor": "middle",
              "fill": "white"
            },
            attr: {dy: "65px"},
            centralClick: function() {
              alert("Here is more details!!");
            }
          }
        },
        {
          name: "lines",
          options: {
            format: [
              {// Line #0
                textField: "count",
                classed: {count: true},
                style: {
                  "font-size": "28px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  fill: "white"
                },
                attr: {
                  dy: "0px",
                  x: function (d) {return d.cx;},
                  y: function (d) {return d.cy;}
                }
              },
              {// Line #1
                textField: "text",
                classed: {text: true},
                style: {
                  "font-size": "14px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  fill: "white"
                },
                attr: {
                  dy: "20px",
                  x: function (d) {return d.cx;},
                  y: function (d) {return d.cy;}
                }
              }
            ],
            centralFormat: [
              {// Line #0
                style: {"font-size": "50px"},
                attr: {}
              },
              {// Line #1
                style: {"font-size": "30px"},
                attr: {dy: "40px"}
              }
            ]
          }
        }]
    });
  }
}
