import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsComponent } from './dots.component';

describe('DotsComponent', () => {
  let component: DotsComponent;
  let fixture: ComponentFixture<DotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotsComponent]
    });
    fixture = TestBed.createComponent(DotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
