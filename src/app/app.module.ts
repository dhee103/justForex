import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component'
import { SideBarComponent } from './side-bar/side-bar.component'
import { DashboardComponent }  from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component'
import { MyProfileComponent } from './myprofile/myprofile.component'
import { CommunityComponent } from './community/community.component'
import { LeaderboardsComponent } from './leaderboards/leaderboards.component'
import { TutorialsComponent } from './tutorials/tutorials.component'
import { EditorComponent } from './editor/editor.component'
import { MyprojectComponent } from './myproject/myproject.component'
import { GraphsComponent } from './graphs/graphs.component'

import { EditorService } from './editor/editor.service';
import { ProjectsService } from './projects/projects.service';

export const appRoutes: Routes = [
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
    EditorComponent,
    MyprojectComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AceEditorModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    EditorService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
