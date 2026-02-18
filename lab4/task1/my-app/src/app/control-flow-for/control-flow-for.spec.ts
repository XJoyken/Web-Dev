import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowFor } from './control-flow-for';

describe('ControlFlowFor', () => {
  let component: ControlFlowFor;
  let fixture: ComponentFixture<ControlFlowFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
