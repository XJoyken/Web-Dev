import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingComponent } from './updating-component';

describe('UpdatingComponent', () => {
  let component: UpdatingComponent;
  let fixture: ComponentFixture<UpdatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
