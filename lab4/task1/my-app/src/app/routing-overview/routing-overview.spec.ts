import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingOverview } from './routing-overview';

describe('RoutingOverview', () => {
  let component: RoutingOverview;
  let fixture: ComponentFixture<RoutingOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
