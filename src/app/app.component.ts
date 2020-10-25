import { AfterViewChecked, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked {

  constructor(public auth: AuthService,
              private changeDetector: ChangeDetectorRef) { }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

}
