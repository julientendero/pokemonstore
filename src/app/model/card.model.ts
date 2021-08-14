
/**
 * Interface décrivant le contenu d'une entité Card correspondant
 * aux informations relatives à une carte pokemon
 */

export interface Card {
    id: string;     // Ientifiant de la carte
    name: string;   // nom de la cartes
    images: {
        large: string,  // URL de l'image de la carte en grand format
        small: string   // URL de l'image de la carte en petit format
    }
}