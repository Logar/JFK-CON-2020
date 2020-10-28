import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-unauth-nav',
  templateUrl: './unauth-nav.component.html',
  styleUrls: ['./unauth-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnauthNavComponent implements OnInit {

  loggedIn: Boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn;
  }

}
