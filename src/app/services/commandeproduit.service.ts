import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeproduitService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  getall() {
    return this.http.get(this.url + 'commande/commandes'); 
  }
  marquerLivre(commandeId: any) {
    return this.http.put(this.url + 'commande/livreCommande/' + commandeId, {});
  }

}


