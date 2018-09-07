import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './layout/body/body.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
