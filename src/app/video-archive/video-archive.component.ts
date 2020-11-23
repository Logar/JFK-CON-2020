import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../services/auth.service';

import * as VIDEO_DATA from '../../assets/json/videos.json';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-video-archive',
  templateUrl: './video-archive.component.html',
  styleUrls: ['./video-archive.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoArchiveComponent implements OnInit {

  videos: Array<Object>;
  currentUser: User;
  selectedDay: string;

  constructor(
    protected _router: Router,
    private _auth: AuthService) { 
    this.videos = VIDEO_DATA['default'].Friday;
    this.currentUser = this._auth.currentUser;
    this.selectedDay = 'Friday';
  }

  ngOnInit(): void { 
    if (!this._auth.loggedIn) {
      this._router.navigate(['/']);
    }
  }

  onDayChanged(day) {
    this.selectedDay = day;
    this.videos = VIDEO_DATA['default'][day];
  }

}
