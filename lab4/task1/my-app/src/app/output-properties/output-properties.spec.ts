import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputProperties } from './output-properties';

describe('OutputProperties', () => {
  let component: OutputProperties;
  let fixture: ComponentFixture<OutputProperties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputProperties]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputProperties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
