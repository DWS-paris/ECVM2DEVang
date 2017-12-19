import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NEW v5.1.0 : Importer le module du router
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Routing } from './app.routes';
import { HeaderComponent } from './partials/header/header.component';

@NgModule({
  declarations: [ AppComponent, HeaderComponent ],
  imports: [ BrowserModule, RouterModule, Routing ],
  bootstrap: [AppComponent]
})
export class AppModule { }
