import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosListComponent } from './libros-list/libros-list.component';
import { LibrosEnProcesoComponent } from './libros-en-proceso/libros-en-proceso.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosListComponent,
    LibrosEnProcesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
