import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubNavComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

}
