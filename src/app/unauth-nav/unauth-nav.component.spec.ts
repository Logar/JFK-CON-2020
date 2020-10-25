import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthNavComponent } from './unauth-nav.component';

describe('UnauthNavComponent', () => {
  let component: UnauthNavComponent;
  let fixture: ComponentFixture<UnauthNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
