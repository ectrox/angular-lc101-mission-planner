import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CrewComponent } from './crew/crew.component';
import { EquiptmentComponent } from './equiptment/equiptment.component';
import { ExperiementsComponent } from './experiements/experiements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrewComponent,
    EquiptmentComponent,
    ExperiementsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
