import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhomeBookingServiceComponent } from './ihome-booking-service.component';

describe('IhomeBookingServiceComponent', () => {
  let component: IhomeBookingServiceComponent;
  let fixture: ComponentFixture<IhomeBookingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhomeBookingServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IhomeBookingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
