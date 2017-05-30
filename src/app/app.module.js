"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var top_header_component_1 = require("./top-header.component");
var side_bar_component_1 = require("./side-bar.component");
var dashboard_component_1 = require("./dashboard.component");
var projects_component_1 = require("./projects.component");
var myprofile_component_1 = require("./myprofile.component");
var community_component_1 = require("./community.component");
var leaderboards_component_1 = require("./leaderboards.component");
var tutorials_component_1 = require("./tutorials.component");
var api_component_1 = require("./api.component");
var editor_component_1 = require("./editor.component");
var appRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'myprojects',
        component: projects_component_1.ProjectsComponent
    },
    {
        path: 'myprofile',
        component: myprofile_component_1.MyProfileComponent
    },
    {
        path: 'community',
        component: community_component_1.CommunityComponent
    },
    {
        path: 'leaderboards',
        component: leaderboards_component_1.LeaderboardsComponent
    },
    {
        path: 'tutorials',
        component: tutorials_component_1.TutorialsComponent
    },
    {
        path: 'api',
        component: api_component_1.APIComponent
    },
    {
        path: 'editor',
        component: editor_component_1.EditorComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            top_header_component_1.TopHeaderComponent,
            side_bar_component_1.SideBarComponent,
            dashboard_component_1.DashboardComponent,
            projects_component_1.ProjectsComponent,
            myprofile_component_1.MyProfileComponent,
            leaderboards_component_1.LeaderboardsComponent,
            tutorials_component_1.TutorialsComponent,
            community_component_1.CommunityComponent,
            api_component_1.APIComponent,
            editor_component_1.EditorComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map