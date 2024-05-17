import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandecouleurService {
  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

 
 
  getallcommande() {
    return this.http.get(this.url + 'commandecouleur/all');
  }

  marquerLivre(commandeId: any) {
    return this.http.put(this.url + 'commandecouleur/livreCommande/' + commandeId, {});
  }

}
