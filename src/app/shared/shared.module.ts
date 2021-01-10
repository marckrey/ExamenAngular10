import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CourseComponent } from './components/course/course.component';


@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule
  ],
  exports: [CourseComponent]
})
export class SharedModule { }
