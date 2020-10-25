import { Injectable } from '@angular/core';
import { Router, ChildActivationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';

import { SEOService } from '../../services/seo.service';

@Injectable()
export abstract class MetaAbstract {

  public constructor(
    protected _seoService: SEOService,
    protected _router: Router
  ) { 
    this.updateMetaData();
  }

  updateMetaData(): void {

    this._router.events.pipe(
      filter(event => event instanceof ChildActivationEnd),
      take(1)
    )
    .subscribe((event) => {
      let data = event['snapshot']._routerState._root.children[0].value.data;
      this._seoService.updateTitle(data['title']);
      // Updating description tag dynamically with title
      this._seoService.updateDescription(
        data['description']
      );
    });
  }
  
}
