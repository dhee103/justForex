import {Component, trigger, state, style, transition, animate, keyframes} from '@angular/core'

@Component({
  selector: 'side-bar',
  templateUrl: './views/side-bar.component.html',
  styleUrls: [
    './css/side-bar.component.css'
  ],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),

    trigger('navMove', [
      state('in', style({
        transform: 'translate3d(370%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})

export class SideBarComponent {
  menuState:string = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
