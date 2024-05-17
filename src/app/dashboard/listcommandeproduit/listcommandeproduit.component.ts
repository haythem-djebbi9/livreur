import { Component } from '@angular/core';
import { CommandeproduitService } from 'src/app/services/commandeproduit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcommandeproduit',
  templateUrl: './listcommandeproduit.component.html',
  styleUrls: ['./listcommandeproduit.component.css']
})
export class ListcommandeproduitComponent {
  constructor(public data: CommandeproduitService ) { }

  commandes: any;

  ngOnInit(): void {
    this.data.getall()
      .subscribe(
        res => {
          this.commandes = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  marquerLivre(commandeId: any) {
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
        this.data.marquerLivre(commandeId)
          .subscribe(
            res => {
              console.log('Commande marquée comme livrée avec succès');
              // Mettre à jour la liste des commandes après marquer une commande comme livrée
              this.data.getall().subscribe(
                newCommandes => {
                  this.commandes = newCommandes;
                },
                err => {
                  console.log(err);
                }
              );
            },
            err => {
              console.log(err);
            }
          );
      }
    });
  }
}
