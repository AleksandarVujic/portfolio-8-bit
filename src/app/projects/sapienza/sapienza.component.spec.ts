import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapienzaComponent } from './sapienza.component';

describe('SapienzaComponent', () => {
  let component: SapienzaComponent;
  let fixture: ComponentFixture<SapienzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapienzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapienzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
