import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '',               redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview',       component: OverviewComponent },
  { path: 'experience',     component: ExperienceComponent },
  { path: 'education',      component: EducationComponent },
  { path: 'projects',       component: ProjectsComponent },
  { path: 'contact',        component: ContactComponent },
  { path: 'about',          component: AboutComponent },
  { path: '**',             redirectTo: 'overview' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
