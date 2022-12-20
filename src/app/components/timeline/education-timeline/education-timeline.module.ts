import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationTimelineComponent } from './education-timeline.component';



@NgModule({
  declarations: [EducationTimelineComponent],
  imports: [
    CommonModule,

  ],
  exports:[EducationTimelineComponent],
  bootstrap: [EducationTimelineComponent]
})
export class EducationTimelineModule { }
