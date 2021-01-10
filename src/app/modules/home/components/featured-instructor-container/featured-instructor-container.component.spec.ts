import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedInstructorContainerComponent } from './featured-instructor-container.component';

describe('FeaturedInstructorContainerComponent', () => {
  let component: FeaturedInstructorContainerComponent;
  let fixture: ComponentFixture<FeaturedInstructorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedInstructorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedInstructorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
