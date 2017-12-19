import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Importer le service
import { JsonService } from '../../services/json.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  // Injecter le service dans le constructor
  constructor( private myService: JsonService, private route: Router ) { }

  // Créer une variable pour la collection de données
  public dataCollection: any = undefined;

  // Créer une fonction pour supprimer un post
  public supBlogPost(item: any): void {
    alert(`Post à supprimer : ${item.title}`)
  }


  // Créer une fonction pour charger les posts
  public getBlogPosts(): void {

    // Appeler la fonction du service
    this.myService.getAllPosts().then( data => {

      // Envoyer les donnés dans la collection
      this.dataCollection = data;
      
    }).catch( error => {
      console.log(error);
    })
  };

  // Créer une fonction pour changer de vue
  public changeVue(id: number){
    console.log(id)
    this.route.navigate([`/editpost/${id}`])
  }

  ngOnInit() {
    this.getBlogPosts();
  }

}
