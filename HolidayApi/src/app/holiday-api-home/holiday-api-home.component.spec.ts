import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayApiHomeComponent } from './holiday-api-home.component';

describe('HolidayApiHomeComponent', () => {
  let component: HolidayApiHomeComponent;
  let fixture: ComponentFixture<HolidayApiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayApiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayApiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
