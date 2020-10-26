import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Router } from '@angular/router';

import { MetaAbstract } from '../shared/abstract/meta.abstract';
import { SEOService } from '../services/seo.service';
import { SpeakerService } from '../services/speaker.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakersComponent extends MetaAbstract implements OnInit {
  
  primarySpeakers: Array<Object>;
  secondarySpeakers: Array<Object>;
  
  public constructor(
    public speakerService: SpeakerService,
    protected _seoService: SEOService,
    protected _router: Router
  ) {
    // Invoke parent class constructor
    super(_seoService, _router);
    
    this.primarySpeakers = [];
    this.secondarySpeakers = [];
  }

  ngOnInit(): void {
    this.speakerService.getSpeakers().subscribe(speakers => {
      this.primarySpeakers = speakers.filter(item => item['primary'] === true);
      this.secondarySpeakers = speakers.filter(item => item['primary'] === false);
    });
  }

}
