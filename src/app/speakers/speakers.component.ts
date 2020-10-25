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

  speakerModel: Speaker;
  
  primarySpeakers: Array<Object>;
  secondarySpeakers: Array<Object>;
  
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
      
      this.getSpeakers().subscribe(speakers => {
        
        if (params['link']) {  
          let speakerToFind = Object.assign(
            this.speakerModel,
            {link: params['link']}
          );
          this.speakerModel = this.getSpeaker(speakers, speakerToFind)[0];
          
          this._seoService.updateTitle('24th JFK Assassination Conference &raquo; Speakers &raquo; '
            + this.speakerModel.name);

          this._seoService.updateDescription(this.speakerModel.bio);
        } else {
          this.primarySpeakers = speakers.filter(item => item['primary'] === true);
          this.secondarySpeakers = speakers.filter(item => item['primary'] === false);
        }
      });
    });
  }

  ngOnInit(): void { }

  public getSpeakers() {
    return this.speakerService.getSpeakers();
  }

  public getSpeaker(speakers: Speaker[], speaker: Speaker): Object {
    let speakerInfo = speakers.filter(item => {
      if (item.link === speaker.link)
        return speaker;
    });
    return speakerInfo;
  }
}
