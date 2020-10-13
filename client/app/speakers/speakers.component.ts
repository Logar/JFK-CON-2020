import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  primarySpeakers: Array<Object>;
  secondarySpeakers: Array<Object>;

  constructor() { 
    this.primarySpeakers = [];
    this.secondarySpeakers = [];
  }

  ngOnInit(): void {
    this.primarySpeakers.push({
        thumbnail: 'jim-dieugenio.jpg',
        name: 'Jim DiEugenio'
      },
      {
        thumbnail: 'bill-simpich.jpg',
        name: 'Bill Simpich'
      },
      {
        thumbnail: 'robert-groden.jpg',
        name: 'Robert Groden'
      }
    );
    for (let count = 0; count < 11; count++) {
      this.secondarySpeakers.push({
        thumbnail: 'avatar.jpg',
        name: 'TBA'
      });
    }
  }

}
