import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizingImages } from './optimizing-images';

describe('OptimizingImages', () => {
  let component: OptimizingImages;
  let fixture: ComponentFixture<OptimizingImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizingImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizingImages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
