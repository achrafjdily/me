import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteOutlinedCollapsedLogoComponent } from './white-outlined-collapsed-logo.component';

describe('WhiteOutlinedCollapsedLogoComponent', () => {
  let component: WhiteOutlinedCollapsedLogoComponent;
  let fixture: ComponentFixture<WhiteOutlinedCollapsedLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhiteOutlinedCollapsedLogoComponent]
    });
    fixture = TestBed.createComponent(WhiteOutlinedCollapsedLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
