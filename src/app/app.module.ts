import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ListModule, StructuredListModule} from 'carbon-components-angular';

import { AppComponent } from './app.component';
import { MediumComponent } from './medium/medium.component';
import { WorksComponent } from './works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    MediumComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StructuredListModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
