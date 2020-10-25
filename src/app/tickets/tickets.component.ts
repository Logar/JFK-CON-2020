import {
  Component,
  OnInit,
  ViewEncapsulation 
} from '@angular/core';

import { Router } from '@angular/router';

import { MetaAbstract } from '../shared/abstract/meta.abstract'; 
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TicketsComponent extends MetaAbstract implements OnInit {

  public constructor(
    protected _seoService: SEOService,
    protected _router: Router
  ) {
    // Invoke parent class constructor
    super(_seoService, _router);
  }

  ngOnInit(): void { }

}
