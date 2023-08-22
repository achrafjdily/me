import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLogoComponent } from './text-logo.component';

describe('TextLogoComponent', () => {
  let component: TextLogoComponent;
  let fixture: ComponentFixture<TextLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextLogoComponent]
    });
    fixture = TestBed.createComponent(TextLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
