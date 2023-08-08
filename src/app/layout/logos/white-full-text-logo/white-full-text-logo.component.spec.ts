import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteFullTextLogoComponent } from './white-full-text-logo.component';

describe('WhiteFullTextLogoComponent', () => {
  let component: WhiteFullTextLogoComponent;
  let fixture: ComponentFixture<WhiteFullTextLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhiteFullTextLogoComponent]
    });
    fixture = TestBed.createComponent(WhiteFullTextLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
