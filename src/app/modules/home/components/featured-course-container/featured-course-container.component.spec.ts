import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCourseContainerComponent } from './featured-course-container.component';

describe('FeaturedCourseContainerComponent', () => {
  let component: FeaturedCourseContainerComponent;
  let fixture: ComponentFixture<FeaturedCourseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCourseContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCourseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
