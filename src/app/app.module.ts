import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { TopHeaderComponent } from './top-header.component'
import { SideBarComponent } from './side-bar.component'
import { DashboardComponent }  from './dashboard.component';
import { ProjectsComponent } from './projects.component'
import { MyProfileComponent } from './myprofile.component'
import { CommunityComponent } from './community.component'
import { LeaderboardsComponent } from './leaderboards.component'
import { TutorialsComponent } from './tutorials.component'
import { APIComponent } from './api.component'
import { EditorComponent } from './editor.component'

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'myprojects',
    component: ProjectsComponent
  },
  {
    path: 'myprofile',
    component: MyProfileComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'leaderboards',
    component: LeaderboardsComponent
  },
  {
    path: 'tutorials',
    component: TutorialsComponent
  },
  {
    path: 'api',
    component: APIComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
      AppComponent,
      TopHeaderComponent,
      SideBarComponent,
      DashboardComponent,
      ProjectsComponent,
      MyProfileComponent,
      LeaderboardsComponent,
      TutorialsComponent,
      CommunityComponent,
      APIComponent,
      EditorComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
