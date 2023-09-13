"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chien_1 = require("./Chien");
const Chat_1 = require("./Chat");
const Employe_1 = require("./Employe");
// Création d'instances d'animaux
const buddy = new Chien_1.Chien(1, "Buddy", 3, new Date(2023, 8, 1), new Date(2023, 8, 15), "Golden Retriever");
const whiskers = new Chat_1.Chat(2, "Whiskers", 2, new Date(2023, 7, 20), new Date(2023, 8, 5));
// Création d'instances d'employés
const john = new Employe_1.Employe(101, "John", whiskers); // John travaille avec le chat "Whiskers"
const alice = new Employe_1.Employe(102, "Alice", buddy); // Alice travaille avec le chien "Buddy"
const bob = new Employe_1.Employe(103, "Bob"); // Bob ne travaille pas avec d'animal
// Appel de la méthode travailler pour simuler les interactions
john.travailler();
alice.travailler();
bob.travailler();
