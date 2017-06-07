import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class LeaderboardsService {

  constructor(private http:Http) {
    console.log("Leaderboard service initialized.");
  }

  getUsers() {
    
  }

}
