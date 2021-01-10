import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-instructor-container',
  templateUrl: './featured-instructor-container.component.html',
  styleUrls: ['./featured-instructor-container.component.css']
})
export class FeaturedInstructorContainerComponent implements OnInit {

  listarInstructor: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
