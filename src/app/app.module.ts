import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
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
import { MyprojectComponent } from './myproject/myproject.component'
import { GraphsComponent } from './graphs/graphs.component'

import { EditorService } from './services/editor.service';
import { ProjectsService } from './services/projects.service';

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
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'graphs',
    component: GraphsComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
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
    EditorComponent,
    MyprojectComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AceEditorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EditorService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
