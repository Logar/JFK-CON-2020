import { 
  Component,
  ViewEncapsulation, 
  OnInit
} from '@angular/core';

import { Router } from '@angular/router';

import { MetaAbstract } from '../shared/abstract/meta.abstract'; 
import { SEOService } from '../services/seo.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashComponent extends MetaAbstract implements OnInit {

  public constructor(
    protected _seoService: SEOService,
    protected _router: Router,
    private _auth: AuthService
  ) {
    // Invoke parent class constructor
    super(_seoService, _router);
  }
  
  ngOnInit(): void { 
    if (this._auth.loggedIn) {
      this._router.navigate(['/home']);
    }
  }

}
