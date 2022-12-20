import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { EducationTimelineModule } from './education-timeline/education-timeline.module';
import { ExperienceTimelineModule } from './experience-timeline/experience-timeline.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  bootstrap: [TimelineComponent]
})
export class TimelineModule { }
