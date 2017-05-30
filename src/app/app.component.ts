import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
  <div class="background">
    <top-header></top-header>
    <side-bar></side-bar>

    <div class="template">
      <router-outlet ></router-outlet>
    </div>
  </div>
  `,
  styleUrls: [
    './css/app.component.css'
  ],
})

export class AppComponent  {

}
