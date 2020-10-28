import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-unauth-nav',
  templateUrl: './unauth-nav.component.html',
  styleUrls: ['./unauth-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnauthNavComponent implements OnInit {

  loggedIn: Boolean;
  checked: Boolean;

  constructor(
    private auth: AuthService,
    private router: Router) {
    router.events.subscribe(() => this.checked = false);
    this.checked = false;
  }

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn;
  }

  // for window scroll events
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.checked = false;
  }
  
  ngOnDestroy() { }

  checkedOnChange() {
    this.checked = (this.checked) ? false : true;
  }

}
