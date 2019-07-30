import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from '../home/home.component';

const portfolioRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'skills',
        component: SkillsComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(portfolioRoutes)
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }