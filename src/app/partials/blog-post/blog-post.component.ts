/* 
  Class Input : récupérer des données depuis le composant parent 
  Class Output : envoyer des données vers le composant parent 
  Class EventEmitter : création d'événements personnalisés
*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html'
})
export class BlogPostComponent implements OnInit {

  // Import de la valeur de la variable item
  @Input() item: any;

  // Créer un événement personnalisé avec le décorateur @Output()
  @Output() eventSupBlogPost = new EventEmitter();
  @Output() eventShowPost = new EventEmitter();

  // Créer une fonction pour émettre l'événement personnalisé
  public emitErase(item: any): void{
    this.eventSupBlogPost.emit(item)
  }

  // Créer une fonction pour émettre l'événement personnalisé
  public showPost(id: number): void {
    this.eventShowPost.emit(id)
  }

  constructor() { }

  ngOnInit() {
  }

}
