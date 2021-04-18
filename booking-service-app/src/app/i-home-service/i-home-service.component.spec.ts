import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IHomeServiceComponent } from './i-home-service.component';

describe('IHomeServiceComponent', () => {
  let component: IHomeServiceComponent;
  let fixture: ComponentFixture<IHomeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IHomeServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IHomeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
