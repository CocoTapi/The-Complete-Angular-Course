import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NewCourseComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
