import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Speaker } from '../shared/models/speaker.model';
import { SpeakerService } from '../services/speaker.service';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpeakerComponent implements OnInit {
  speakerModel: Speaker;
  activatedRouteObservable: ActivatedRoute;

  public constructor(
    public speakerService: SpeakerService,
    protected _seoService: SEOService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let speakersObservable = this.speakerService.getSpeakers();

    const { link } = this._activatedRoute.snapshot.params;
    
    speakersObservable.subscribe(speakers => {

      if (link) {
        let speakerToFind = Object.assign(
          new Speaker(),
          { link: link }
        );
        this.speakerModel = this.getSpeaker(speakers, speakerToFind)[0];

        this._seoService.updateTitle('24th JFK Assassination Conference &raquo; Speakers &raquo; '
          + this.speakerModel.name);

        this._seoService.updateDescription(this.speakerModel.bio);
      }
    });
  }

  public getSpeaker(speakers: Speaker[], speaker: Speaker): Object {
    let speakerInfo = speakers.filter(item => {
      if (item.link === speaker.link)
        return speaker;
    });
    return speakerInfo;
  }

}
