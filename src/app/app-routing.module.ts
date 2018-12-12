import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
