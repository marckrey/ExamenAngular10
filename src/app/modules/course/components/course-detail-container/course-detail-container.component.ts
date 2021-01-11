import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICurso } from '../../../../shared/interfaces/courseInterface';
import { CourseServiceService } from '../../../course/services/course-service.service';

@Component({
  selector: 'app-course-detail-container',
  templateUrl: './course-detail-container.component.html',
  styleUrls: ['./course-detail-container.component.css']
})
export class CourseDetailContainerComponent implements OnInit {

  course: ICurso;
  id: number;

  constructor(
    private activateRouter: ActivatedRoute,
    private wsCursoService: CourseServiceService
  ) {
    activateRouter.params.subscribe( parametros => {
      this.id = parametros['id'];
    });
   }
   
  ngOnInit(): void {
    this.getCurso(this.id);
  }

  getCurso(id: number): void {
    this.wsCursoService.getCursoDetalle(id)
      .subscribe((data: ICurso) => {
        this.course = data;
      });
    }
}

