import { Component, OnInit } from '@angular/core';
import { CommandecouleurService } from 'src/app/services/commandecouleur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcommandecouleur',
  templateUrl: './listcommandecouleur.component.html',
  styleUrls: ['./listcommandecouleur.component.css']
})
export class ListcommandecouleurComponent implements OnInit {
  commandes: any;

  constructor(public data: CommandecouleurService) { }

  ngOnInit(): void {
    this.loadCommandes();
  }

  loadCommandes(): void {
    this.data.getallcommande().subscribe(
      res => {
        this.commandes = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  marquerLivre(commandeId: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to update this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.data.marquerLivre(commandeId).subscribe(
          res => {
            console.log('Commande marquée comme livrée avec succès');
            this.loadCommandes(); // Rafraîchir la liste des commandes après la mise à jour réussie
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
