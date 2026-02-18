import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomyOfComponent } from './anatomy-of-component';

describe('AnatomyOfComponent', () => {
  let component: AnatomyOfComponent;
  let fixture: ComponentFixture<AnatomyOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnatomyOfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnatomyOfComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
