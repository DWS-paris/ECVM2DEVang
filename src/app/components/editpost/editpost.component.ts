import { Component, OnInit } from '@angular/core';

// Importer les interfaces pour récupérer le paramètre de la route
import { Params, ActivatedRoute } from '@angular/router';

// Importer le service
import { JsonService } from '../../services/json.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html'
})
export class EditpostComponent implements OnInit {

  // Injecter ActivatedRoute dans le constructor
  constructor( private route: ActivatedRoute, private myService: JsonService ) { }

  // Création d'un méthode pour récupérer le paramètre de la route
  private getRouteParam(): void {

    // Analyser les paramètres de la route
    this.route.params.forEach( (param: Params) => {
      let postId = parseInt(param['id']);

      // Appeler la fonction du service
      this.myService.getSinglePost(postId).then( data => {
        console.log(data)

      }).catch( error => console.log(error) )
    });

  }

  ngOnInit() {
    this.getRouteParam()
  }

}
