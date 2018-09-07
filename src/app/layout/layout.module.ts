import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';


const routes: Routes = [

]

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [HeadComponent, FooterComponent, BodyComponent],
  exports: [
    HeadComponent, FooterComponent, BodyComponent
  ]
})
export class LayoutModule { }
