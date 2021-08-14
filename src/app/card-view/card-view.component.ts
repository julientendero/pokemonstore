import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * Composant permettant l'affichage et la gestion d'une carte Pokemon
 */

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input() card: any; // Objet carte courant
  @Input() inBucket: boolean = false; // Propriété affectée à true
                                      // si la carte courante est dans le panier
                                      // false sinon

  public lowPriceCard: number = 0;
  

  constructor(private _snackBar: MatSnackBar)
  {
  }

  ngOnInit(): void {
    if (this.card
        && this.card.cardmarket
        && this.card.cardmarket.prices
        && this.card.cardmarket.prices.lowPrice)
    {
      this.lowPriceCard = this.card.cardmarket.prices.lowPrice;
    }

  }

  // Evènement relatif à l'ajout de la carte courante dans le panier
  @Output() addCardEvent = new EventEmitter<string>();
  // Evènement relatif à la suppression de la carte courante dans le panier
  @Output() removeCardEvent = new EventEmitter<string>();

  // Fonction d'ajout de la carte courante dans le panier
  onAdd(value: string) {

    this.addCardEvent.emit(this.card);
    const message = 'Carte \'' + this.card.name + '\' ajoutée au panier';
    this._snackBar.open(message, undefined, {
      duration: 3000,
    });
    
  }

  // Fonction de suppression de la carte courante du panier
  onRemove(value: string) {
    this.removeCardEvent.emit(this.card);
    const message = 'Carte \'' + this.card.name + '\' supprimée du panier';
    this._snackBar.open(message, undefined, {
      duration: 3000,
    });
  }

}
