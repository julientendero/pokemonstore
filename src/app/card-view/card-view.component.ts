import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
  

  constructor() { }

  ngOnInit(): void {
  }

  // Evènement relatif à l'ajout de la carte courante dans le panier
  @Output() addCardEvent = new EventEmitter<string>();
  // Evènement relatif à la suppression de la carte courante dans le panier
  @Output() removeCardEvent = new EventEmitter<string>();

  // Fonction d'ajout de la carte courante dans le panier
  onAdd(value: string) {

    console.log("TEST 1000: ", this.card);

    this.addCardEvent.emit(value);
  }

  // Fonction de suppression de la carte courante du panier
  onRemove(value: string) {
    this.removeCardEvent.emit(value);
  }

}
