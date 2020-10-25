import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Speaker } from '../shared/models/speaker.model';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  speakers: Array<Object>;
  private _jsonUrl: string = 'assets/json/speakers.json';

  public constructor(private http: HttpClient) {
    this.speakers = [];
  }

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(this._jsonUrl); 
    // if (this.speakers.length === 0) {
    //   console.log("No Speakers");
    //   return this.http.get<Speaker[]>('/api/speakers')
    //     .do(data => { 
    //       this.speakers = data;
    //     })
    // } else {
    //   console.log("Got Speakers");
    //   return Observable.of(this.speakers);
    // }
  }

  countSpeakers(): Observable<number> {
    return this.http.get<number>('/api/speakers/count');
  }

  addSpeaker(speaker: Speaker): Observable<Speaker> {
    return this.http.post<Speaker>('/api/speaker', speaker);
  }

  getSpeaker(speaker: Speaker): Observable<Speaker> {
    return this.http.get<Speaker>(`/api/speaker/${speaker.link}`);
  }

  editSpeaker(speaker: Speaker): Observable<any> {
    return this.http.put(`/api/speaker/${speaker._id}`, speaker, { responseType: 'text' });
  }

  deleteSpeaker(speaker: Speaker): Observable<any> {
    return this.http.delete(`/api/speaker/${speaker._id}`, { responseType: 'text' });
  }

}
