import { Component, OnInit } from '@angular/core';

// Importer le service
import { JsonService } from '../../services/json.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  // Injecter le service dans le constructor
  constructor( private myService: JsonService ) { }

  public dataCollection: any = [
    {
      id: 0,
      title: `Salut le monde`,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
      id: 1,
      title: `Hello World`,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    }
  ];

  // Créer une fonction pour supprimer un post
  public supBlogPost(item: any): void {
    alert(`Post à supprimer : ${item.title}`)
  }

  

  ngOnInit() {

    this.myService.getAllPosts().then( data => {
      console.log(data);
      
    }).catch( error => {
      console.log(error);
    })

  }

}
