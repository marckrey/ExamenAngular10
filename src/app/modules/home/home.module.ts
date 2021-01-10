import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FeaturedCoursesComponent } from './components/featured-courses/featured-courses.component';
import { FeaturedInstructorsComponent } from './components/featured-instructors/featured-instructors.component';


@NgModule({
  declarations: [HomePageComponent, HeaderComponent, FeaturedCoursesComponent, FeaturedInstructorsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
