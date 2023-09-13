import { Animal } from './Animal';

export class Employe {
    private _id: number;
    private _nom: string;
    private _animal?: Animal;

    constructor(
        id: number,
        nom: string,
        animal?: Animal
    ) {
        this._id = id;
        this._nom = nom;
        this._animal = animal;
    }

    // Autres méthodes inchangées

    travailler() {
        console.log(`${this._nom} arrive au travail.`);
        if (this._animal) {
            console.log(`${this._nom} travaille avec ${this._animal.nom} du ${this._animal.debutPret.toLocaleDateString()} au ${this._animal.finPret.toLocaleDateString()}`);
            this._animal.faireDuBruit(); // Appel de la méthode faireDuBruit de l'animal associé
        } else {
            console.log(`${this._nom} ne travaille pas avec d'animal.`);
        }
    }

    // Autres méthodes inchangées
}
