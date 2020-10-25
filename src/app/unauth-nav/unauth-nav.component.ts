import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-unauth-nav',
  templateUrl: './unauth-nav.component.html',
  styleUrls: ['./unauth-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnauthNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
