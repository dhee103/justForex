import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// import { Ng2SmartTableModule } from 'ng2-smart-table';
//
// import { LocalDataSource } from 'ng2-smart-table';

import { ServerDataSource } from '../../../../node_modules/ng2-smart-table';

@Component({
  // selector: 'app-leaderboards',
  selector: 'advanced-example-server',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})

export class LeaderboardsComponent {
// implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Album'
      },
      username: {
        title: 'Title'
      },
      email: {
        title: 'Url'
      }
    }
  };

  // data = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz"
  //   },
  //   {
  //     id: 2,
  //     name: "Ervin Howell",
  //     username: "Antonette",
  //     email: "Shanna@melissa.tv"
  //   },
  //
  //   // ... list of items
  //
  //   {
  //     id: 11,
  //     name: "Nicholas DuBuque",
  //     username: "Nicholas.Stanton",
  //     email: "Rey.Padberg@rosamond.biz"
  //   }
  // ];

  source: ServerDataSource;

  constructor(http: Http) {
    this.source = new ServerDataSource(http, { endPoint: 'https://jsonplaceholder.typicode.com/photos'});
  }

  // ngOnInit() {
  // }

  // @Input() user: User

}
