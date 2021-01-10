import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-course-container',
  templateUrl: './featured-course-container.component.html',
  styleUrls: ['./featured-course-container.component.css']
})
export class FeaturedCourseContainerComponent implements OnInit {

  listarCurso: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
