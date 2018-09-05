import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule.forRoot(),
  ],
  declarations: [HeadComponent, BodyComponent, FooterComponent],
  exports: [
    HeadComponent, BodyComponent, FooterComponent
  ]
})
export class LayoutModule { }
