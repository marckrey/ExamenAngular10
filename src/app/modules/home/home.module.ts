import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FeaturedInstructorContainerComponent } from './components/featured-instructor-container/featured-instructor-container.component';
import { FeaturedCourseContainerComponent } from './components/featured-course-container/featured-course-container.component';
import { HeaderContainerComponent } from './components/header-container/header-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InstructorModule } from '../instructor/instructor.module';
import { InstructorServiceService } from '../instructor/services/instructor-service.service';
import { CourseServiceService } from '../course/services/course-service.service';


@NgModule({
  declarations: [HomePageComponent, FeaturedInstructorContainerComponent, FeaturedCourseContainerComponent, HeaderContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    InstructorModule
  ],
  providers: [
    InstructorServiceService,
    CourseServiceService
  ]
})
export class HomeModule { }
