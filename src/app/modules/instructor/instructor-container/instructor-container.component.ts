import { Component, OnInit, Input } from '@angular/core';
import { IInstructor } from '../interfaces/instructosInterface';

@Component({
  selector: 'app-instructor-container',
  templateUrl: './instructor-container.component.html',
  styleUrls: ['./instructor-container.component.css']
})
export class InstructorContainerComponent implements OnInit {

  @Input() instruc: IInstructor;

  constructor() { }

  ngOnInit(): void {
  }

}
