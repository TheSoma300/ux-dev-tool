import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'placement-review';
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
}
