import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProperties } from './input-properties';

describe('InputProperties', () => {
  let component: InputProperties;
  let fixture: ComponentFixture<InputProperties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputProperties]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputProperties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
