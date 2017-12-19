import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importer le module HTTP ## a valider ##
import { HttpModule } from '@angular/http';

// Importer les composants
import { AddpostComponent } from './addpost.component';

// Importer le service
import { JsonService } from '../../services/json.service';

// Importer le fichier de la route
import { Routing } from './addpost.route';


@NgModule({
  declarations: [ AddpostComponent ],
  imports: [ CommonModule , Routing, HttpModule ],

  // Renseigner le service dans le tableau des providers
  providers: [ JsonService ]
})

export class AddpostModule {}
