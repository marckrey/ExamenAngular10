import { Component, OnInit } from '@angular/core';
import { InstructorServiceService } from '../../../instructor/services/instructor-service.service';
import { IInstructor } from '../../../instructor/interfaces/instructosInterface';

@Component({
  selector: 'app-featured-instructor-container',
  templateUrl: './featured-instructor-container.component.html',
  styleUrls: ['./featured-instructor-container.component.css']
})
export class FeaturedInstructorContainerComponent implements OnInit {

  listarInstructor: IInstructor[] = [];

  constructor(
    private wsInstructorService: InstructorServiceService
  ) { }

  ngOnInit(): void {
    this.getInstructor();
  }

  getInstructor(): void {
    this.wsInstructorService.getInstructor()
      .subscribe((data: IInstructor[]) => {
        this.listarInstructor = data;
      });
    }
}
