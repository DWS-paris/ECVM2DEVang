import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
