import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceTimelineComponent } from './experience-timeline.component';



@NgModule({
  declarations: [ExperienceTimelineComponent],
  imports: [
    CommonModule,

  ],
  exports: [ExperienceTimelineComponent],
  bootstrap: [ExperienceTimelineComponent]
})
export class ExperienceTimelineModule { }
