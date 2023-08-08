import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsComponent } from './techs.component';

describe('TechsComponent', () => {
  let component: TechsComponent;
  let fixture: ComponentFixture<TechsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechsComponent]
    });
    fixture = TestBed.createComponent(TechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
