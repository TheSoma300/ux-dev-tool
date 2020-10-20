import { Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('container', {static: true}) container: ElementRef;
  title = 'placement-review';
  listener;
  sections = [
    {
      displayName: 'Craneware and me',
      selected: true
    },
    {
      displayName: 'Problem / Solution',
      selected: false
    },
    {
      displayName: 'Requirements and decisions',
      selected: false
    },
    {
      displayName: 'Roadmap',
      selected: false
    },
  ];
  bottom: number;
  constructor(private renderer2: Renderer2) {
    this.listener = this.renderer2.listen('document', 'scroll', (e) => {
      this.checkOffset(e);
    });
  }
  ngOnInit(): void {
    this.bottom = document.getElementById('stepper').offsetTop;
  }
  ngOnDestroy(): void {
    this.listener();
  }
  checkOffset(e): void {
    const stepper = document.getElementById('stepper');
    if (window.pageYOffset >= this.bottom) {
      stepper.classList.add('sticky');
    } else {
      stepper.classList.remove('sticky');
    }
  }
}
