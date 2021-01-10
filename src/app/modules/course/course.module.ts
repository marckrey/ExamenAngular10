import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CoursePageComponent, CourseContainerComponent, CategoryContainerComponent, CourseDetailPageComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
