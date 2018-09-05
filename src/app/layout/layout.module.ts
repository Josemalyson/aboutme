import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
//import { RouterModule } from '@angular/router';

//const routes: Routes = [
//  { path: '', component: BodyComponent }
//]

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule.forRoot(),
//    SharedModule,
 //   RouterModule.forChild(routes)
  ],
  declarations: [HeadComponent, BodyComponent, FooterComponent],
  exports: [
    HeadComponent, BodyComponent, FooterComponent
  ]
})
export class LayoutModule { }
