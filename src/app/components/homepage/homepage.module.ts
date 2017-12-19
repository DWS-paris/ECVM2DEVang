import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importer les composants
import { HomepageComponent } from './homepage.component';

// Importer le fichier de la route
import { Routing } from './homepage.route';


@NgModule({
  declarations: [ HomepageComponent ],
  imports: [ CommonModule , Routing ]
})

export class HomepageModule {}
