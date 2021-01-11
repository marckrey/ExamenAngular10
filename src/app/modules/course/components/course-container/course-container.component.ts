import { Component, OnInit } from '@angular/core';
import { ICurso } from '../../../../shared/interfaces/courseInterface';
import { CourseServiceService } from '../../../course/services/course-service.service';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.css']
})
export class CourseContainerComponent implements OnInit {

  listarCurso: ICurso[] = [];

  constructor(
    private wsCursoService: CourseServiceService
  ) { }

  ngOnInit(): void {
    this.getCurso();
  }

  getCurso(): void {
    this.wsCursoService.getCurso()
      .subscribe((data: ICurso[]) => {
        this.listarCurso = data;
      });
    }
}
