import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayApiInfoComponent } from './holiday-api-info.component';

describe('HolidayApiInfoComponent', () => {
  let component: HolidayApiInfoComponent;
  let fixture: ComponentFixture<HolidayApiInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayApiInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayApiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
