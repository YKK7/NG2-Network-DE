import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsNewCalenderComponent } from './events-new-calender.component';

describe('EventsNewCalenderComponent', () => {
  let component: EventsNewCalenderComponent;
  let fixture: ComponentFixture<EventsNewCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsNewCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsNewCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
