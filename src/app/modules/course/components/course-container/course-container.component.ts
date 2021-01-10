import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.css']
})
export class CourseContainerComponent implements OnInit {

  listCurso: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
