import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhomeBookingComponent } from './ihome-booking.component';

describe('IhomeBookingComponent', () => {
  let component: IhomeBookingComponent;
  let fixture: ComponentFixture<IhomeBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhomeBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IhomeBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
