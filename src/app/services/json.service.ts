import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class JsonService {
  
  constructor ( 
    // Initialisation du service Http
    private http: Http 
  ) {}

  // Définition des adresses de l'API => routes/api.js
  private getCategoriesUrl = 'http://localhost:3000/posts';


  // Fonction pour afficher la liste des tâche depuis la BDD MongDb => http.get
  getAllPosts (): Promise<any[]> {
    // Récupérer les données depuis la BDD MongoDb
    return this.http.get(this.getCategoriesUrl).toPromise().then(this.dataFromMongodb).catch(this.handleError);
    }



  // Traitement des réponses JSON
  private dataFromMongodb(res: Response) {
    return res.json() || { };
  }

  // Traitement des erreurs
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Promise.reject(errMsg);
  }

}