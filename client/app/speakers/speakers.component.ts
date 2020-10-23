import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MetaAbstract } from '../shared/abstract/meta.abstract';
import { SEOService } from '../services/seo.service';
import { SpeakerService } from '../services/speaker.service';

import { Speaker } from '../shared/models/speaker.model';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakersComponent extends MetaAbstract implements OnInit {

  primarySpeakers: Array<Object>;
  secondarySpeakers: Array<Object>;
  allSpeakers: Boolean;
  speakerModel: Speaker;

  public constructor(
    public speakerService: SpeakerService,
    protected _seoService: SEOService,
    protected _router: Router,
    private _route: ActivatedRoute
  ) {
    // Invoke parent class constructor
    super(_seoService, _router);
    
    this.primarySpeakers = [];
    this.secondarySpeakers = [];
    this.speakerModel = new Speaker();

    this._route.params.subscribe(params => {

      if (params['link']) {  
        let speaker = Object.assign(
          this.speakerModel,
          {link: params['link']}
        );
        this.getSpeaker(speaker);
      } else {
        this.allSpeakers = true;
        this.getAllSpeakers();
      }
    });
  }

  ngOnInit(): void { }

  public getAllSpeakers(): void {
    this.speakerService.getSpeakers().subscribe({
      next: response => {
        this.setAllSpeakers.call(this, response);
      },
      error: error => console.error('HTTP Error: ', error),
      complete: () => console.log()
    });
  }

  public getSpeaker(speaker: Speaker): void {
    this.speakerService.getSpeaker(speaker).subscribe({
      next: response => {
        this.setSpeaker.call(this, response);
      },
      error: error => console.error('HTTP Error: ', error),
      complete: () => console.log()
    });
  }

  public setSpeaker(httpData: Array<Object>): void {
    this.speakerModel = Object.assign(httpData);
  }

  public setAllSpeakers(httpData: Array<Object>): void {
    console.log(httpData);
    this.primarySpeakers = httpData.filter(item => item['primary'] === true);
    this.secondarySpeakers = httpData.filter(item => item['primary'] === false);
  }

}
