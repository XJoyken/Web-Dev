import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrableViews } from './deferrable-views';

describe('DeferrableViews', () => {
  let component: DeferrableViews;
  let fixture: ComponentFixture<DeferrableViews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableViews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferrableViews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
