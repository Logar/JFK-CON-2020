import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { MetaAbstract } from '../shared/abstract/meta.abstract'; 
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent extends MetaAbstract implements OnInit {

  primarySpeakers: Array<Object>;
  secondarySpeakers: Array<Object>;

  public constructor(
    protected _seoService: SEOService,
    protected _router: Router
  ) {
    // Invoke parent class constructor
    super(_seoService, _router);

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
