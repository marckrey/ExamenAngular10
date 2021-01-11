import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorContainerComponent } from './instructor-container/instructor-container.component';
import { InstructorServiceService } from './services/instructor-service.service';


@NgModule({
  declarations: [InstructorContainerComponent],
  imports: [
    CommonModule
  ],
  providers: [InstructorServiceService],
  exports: [InstructorContainerComponent]
})
export class InstructorModule { }
