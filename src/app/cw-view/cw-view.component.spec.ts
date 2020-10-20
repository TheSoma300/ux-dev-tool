import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwViewComponent } from './cw-view.component';

describe('CwViewComponent', () => {
  let component: CwViewComponent;
  let fixture: ComponentFixture<CwViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
