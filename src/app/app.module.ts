import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {LayoutModule} from './layout/layout.module';
//import {RouterModule, Route} from '@angular/router'

import { AppComponent } from './app.component';
//import { SharedModule } from './shared/shared.module';

//const routes: Route[] = [
//  { path: '', loadChildren: './layout/layout.module.ts#LayoutModule' }
//]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    //SharedModule,
    //RouterModule.forRoot(routes)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
