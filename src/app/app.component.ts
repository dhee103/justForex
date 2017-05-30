import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
  <top-header></top-header>
  <side-bar></side-bar>

  <router-outlet></router-outlet>
  `
})

export class AppComponent  {

}
