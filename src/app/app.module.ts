import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { EducationTimelineModule } from './components/timeline/education-timeline/education-timeline.module';
import { ExperienceTimelineModule } from './components/timeline/experience-timeline/experience-timeline.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    TimelineComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    EducationTimelineModule,
    ExperienceTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
