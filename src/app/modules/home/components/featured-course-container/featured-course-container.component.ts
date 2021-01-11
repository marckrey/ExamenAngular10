import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../../../course/services/course-service.service';
import { ICurso } from '../../../../shared/interfaces/courseInterface';

@Component({
  selector: 'app-featured-course-container',
  templateUrl: './featured-course-container.component.html',
  styleUrls: ['./featured-course-container.component.css']
})
export class FeaturedCourseContainerComponent implements OnInit {

  listarCurso: ICurso[] = [];

  constructor(
    private wsCursoService: CourseServiceService
  ) { }

  ngOnInit(): void {
    this.getCurso();
  }

  getCurso(): void {
    this.wsCursoService.getCursoDestacado()
      .subscribe((data: ICurso[]) => {
        this.listarCurso = data;
      });
    }
}
