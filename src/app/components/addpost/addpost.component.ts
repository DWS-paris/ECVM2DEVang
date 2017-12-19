import { Component, OnInit } from '@angular/core';

// Importer le service
import { JsonService } from '../../services/json.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html'
})
export class AddpostComponent implements OnInit {

  // Injecter le service dans le constructor
  constructor( public myService: JsonService ) { }

  // Créer une variable pour le formulaire
  public newPost = {
    title: '',
    content: '',
    type: ''
  }

  // Créer une fonction pour la validation du formulaire
  public submitForm(): void {
    console.log(this.newPost)

    // Appeler la fonction du service pour ajoiuter un post
    this.myService.addNewPost(this.newPost).then( data => {
      console.log(data);

    }).catch( error => console.log(error) )
  };

  ngOnInit() {}

}
