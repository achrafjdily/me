import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedLineLogoComponent } from './extended-line-logo.component';

describe('ExtendedLineLogoComponent', () => {
  let component: ExtendedLineLogoComponent;
  let fixture: ComponentFixture<ExtendedLineLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendedLineLogoComponent]
    });
    fixture = TestBed.createComponent(ExtendedLineLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
