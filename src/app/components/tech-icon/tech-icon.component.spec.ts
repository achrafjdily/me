import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIconComponent } from './tech-icon.component';

describe('TechIconComponent', () => {
  let component: TechIconComponent;
  let fixture: ComponentFixture<TechIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechIconComponent]
    });
    fixture = TestBed.createComponent(TechIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
