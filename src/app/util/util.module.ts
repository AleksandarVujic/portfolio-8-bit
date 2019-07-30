import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PagesRoutingModule } from './routing.module';

import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { IgsComponent } from '../projects/igs/igs.component';
import { SapienzaComponent } from '../projects/sapienza/sapienza.component';
import { OtherComponent } from '../projects/other/other.component';

@NgModule({
    declarations: [
        HomeComponent,
        NavbarComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent,
        ErrorPageComponent,
        IgsComponent,
        SapienzaComponent,
        OtherComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        HttpClientModule
    ],
    exports: [
        HomeComponent,
        NavbarComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent,
        ErrorPageComponent,
        IgsComponent,
        SapienzaComponent,
        OtherComponent,
    ],
    providers: []
})
export class UtilModule { }