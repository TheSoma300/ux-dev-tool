import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss'],
  animations: [
    trigger('move', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(3%)'})),
      transition('in => out', animate('2.5s linear')),
      transition('out => in', animate('2.5s linear'))
    ]),
  ]
})
export class LandingViewComponent implements OnInit {
  animationState1 = 'in';
  animationState2 = 'out';

  constructor() { }

  ngOnInit() {
  }


  onEnd1(): void {
    this.animationState1 = this.animationState1 === 'in' ? 'out' : 'in';
  }
  onEnd2(): void {
    this.animationState2 = this.animationState2 === 'in' ? 'out' : 'in';
  }

}
