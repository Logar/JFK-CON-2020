import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [
    './nav.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent {
  
  public constructor(public auth: AuthService) {}
}
