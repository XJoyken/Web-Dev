import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandling } from './event-handling';

describe('EventHandling', () => {
  let component: EventHandling;
  let fixture: ComponentFixture<EventHandling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventHandling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventHandling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
