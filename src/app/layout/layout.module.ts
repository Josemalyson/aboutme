import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadComponent } from './head/head.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule.forRoot(),
  ],
  declarations: [HeadComponent],
  exports:[
    HeadComponent
  ]
})
export class LayoutModule { }
