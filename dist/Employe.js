"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
class Employe {
    _id;
    _nom;
    _animal;
    constructor(id, nom, animal) {
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
        }
        else {
            console.log(`${this._nom} ne travaille pas avec d'animal.`);
        }
    }
}
exports.Employe = Employe;
