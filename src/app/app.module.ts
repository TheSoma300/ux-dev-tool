import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CwViewComponent } from './cw-view/cw-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { PlanViewComponent } from './plan-view/plan-view.component';
import { ProblemSolutionViewComponent } from './problem-solution-view/problem-solution-view.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RoadmapViewComponent } from './roadmap-view/roadmap-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    CwViewComponent,
    ProblemSolutionViewComponent,
    PlanViewComponent,
    RoadmapViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule,
    MatTooltipModule
  ],
  providers: [
    { provide: 'Window',  useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
