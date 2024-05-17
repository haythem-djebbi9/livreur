import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/livreur/';


  


  login(admin: any){

    return this.http.post(this.url + 'login' , admin);

  }


  isLoggedIn(){

    let token = localStorage.getItem('token');

    if(token){
      return true
    }else{
      return false;
    }

  }

  getAdminDataFromToken(){
    // aaeazeazeazeazea.azeazeazeaze.azedqsdqsdqsdqsdqsd
    let token = localStorage.getItem('token');
    if(token){
      let data = JSON.parse( window.atob(token.split('.')[1] ))
      return data;
      
    }


  }
  logout(){
  
    localStorage.removeItem('token');
    
    window.location.reload();
    
    }
}
