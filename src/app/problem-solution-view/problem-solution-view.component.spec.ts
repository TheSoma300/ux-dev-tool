import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolutionViewComponent } from './problem-solution-view.component';

describe('ProblemSolutionViewComponent', () => {
  let component: ProblemSolutionViewComponent;
  let fixture: ComponentFixture<ProblemSolutionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemSolutionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSolutionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
