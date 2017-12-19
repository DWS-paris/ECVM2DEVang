import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class JsonService {
  
  constructor ( 
    // Initialisation du service Http
    private http: Http 
  ) {}

  // Définition des adresses de l'API => routes/api.js
  private postsAPI = 'http://localhost:3000/posts';


  // Fonction pour afficher la liste des posts depuis la BDD JsonServer => http.get
  getAllPosts (): Promise<any[]> {
    // Récupérer les données depuis la BDD MongoDb
    return this.http.get(this.postsAPI).toPromise().then(this.dataFromApi).catch(this.handleError);
  }

  // Fonction pour ajouter un post dans la BDD JsonServer => http.get
  addNewPost( newPost ): Promise<any[]> {
    // Récupérer les données depuis la BDD MongoDb
    return this.http.post(this.postsAPI, newPost).toPromise().then(this.dataFromApi).catch(this.handleError);
  }



  // Traitement des réponses JSON
  private dataFromApi(res: Response) {
    return res.json() || { };
  }

  // Traitement des erreurs
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Promise.reject(errMsg);
  }

}