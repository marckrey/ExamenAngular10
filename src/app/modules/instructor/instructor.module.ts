import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorContainerComponent } from './instructor-container/instructor-container.component';



@NgModule({
  declarations: [InstructorContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [InstructorContainerComponent]
})
export class InstructorModule { }
