import { AfterContentInit, Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit, AfterContentInit {
  @ViewChild('container', {static: true}) container: ElementRef;
  title = 'placement-review';
  listener;
  sections = [
    {
      displayName: 'Craneware and me',
      id: 'cw-view',
      offset: null,
      selected: true
    },
    {
      displayName: 'Problem / Solution',
      id: 'prob-sol-view',
      offset: null,
      selected: false
    },
    {
      displayName: 'Requirements and decisions',
      id: 'plan-view',
      offset: null,
      selected: false
    },
    {
      displayName: 'Roadmap',
      id: 'roadmap-view',
      offset: null,
      selected: false
    },
  ];
  activeSection = {
    displayName: 'Craneware and me',
    id: 'cw-view',
    offset: null,
    selected: true
  };
  bottom: number;
  vh10: number;
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
  ngAfterContentInit(): void {
    this.sections.forEach(sec => {
      sec.offset = document.getElementById(sec.id).offsetTop;
    });
    this.vh10 = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 10;
  }
  checkOffset(e): void {
    const stepper = document.getElementById('stepper');
    const pageOffset = window.pageYOffset;
    if (pageOffset >= this.bottom) {
      stepper.classList.add('sticky');
    } else {
      stepper.classList.remove('sticky');
    }

    if (pageOffset > this.activeSection.offset - this.vh10) {
      this.activeSection = Object.assign({}, this.sections.find(sec => sec.offset > window.pageYOffset - this.vh10));
    }
  }
  scroll(sec) {
    window.scroll(0, this.findPos(document.getElementById(sec.id)) - this.vh10);
    this.activeSection = Object.assign({}, this.sections.find(s => s.id === sec.id));
  }
  findPos(obj) {
    let curtop = 0;
    if (obj.offsetParent) {
      do {
          curtop += obj.offsetTop;
      } while (obj === obj.offsetParent);
      return curtop;
    }
  }
}
