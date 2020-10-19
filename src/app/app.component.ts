import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('move', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(3%)'})),
      transition('in => out', animate('2.5s linear')),
      transition('out => in', animate('2.5s linear'))
    ]),
  ]
})
export class AppComponent {
  title = 'placement-review';
  animationState1 = 'in';
  animationState2 = 'out';


  onEnd1(): void {
    this.animationState1 = this.animationState1 === 'in' ? 'out' : 'in';
  }
  onEnd2(): void {
    this.animationState2 = this.animationState2 === 'in' ? 'out' : 'in';
  }
}
