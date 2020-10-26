import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  OnInit,
  Renderer2,
  ElementRef
} from '@angular/core';

import { AuthService } from './services/auth.service';
import MobileDetect from 'node_modules/mobile-detect/mobile-detect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked, OnInit {

  constructor(public _auth: AuthService,
              private _changeDetector: ChangeDetectorRef,
              private _renderer: Renderer2,
              private _el: ElementRef) { }

  ngAfterViewChecked() {
    this._changeDetector.detectChanges();
  }

  ngOnInit(): void {

    let mobileDetect = new MobileDetect(window.navigator.userAgent);
    
    if (mobileDetect.phone()) {
      this._renderer.addClass(this._el.nativeElement.firstChild, 'app-sm');
    } else if (mobileDetect.tablet()) {
      this._renderer.addClass(this._el.nativeElement.firstChild, 'app-lg');
    } else {
      this._renderer.addClass(this._el.nativeElement.firstChild, 'app-lg');
    }
  }
}
