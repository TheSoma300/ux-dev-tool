import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CwViewComponent } from './cw-view/cw-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { PlanViewComponent } from './plan-view/plan-view.component';
import { ProblemSolutionViewComponent } from './problem-solution-view/problem-solution-view.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    CwViewComponent,
    ProblemSolutionViewComponent,
    PlanViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule
  ],
  providers: [
    { provide: 'Window',  useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
