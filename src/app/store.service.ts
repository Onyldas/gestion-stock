import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  produits = [
    {
      nom: 'Or',
      fournisseur: 'Goldshop',
      email: 'goldshop@gmail.com',
      ingredients: 'Au',
      description: 'Un metal précieux',
      age: 5000,
      conservation: 'NA',
      prix: 36160
    },
    {
      nom: 'Argent',
      fournisseur: 'Silvershop',
      email: 'silvershop@gmail.com',
      ingredients: 'Ar',
      description: 'Un metal commun',
      age: 5001,
      conservation: 'sec',
      prix: 4400
    },
    {
      nom: 'Platine',
      fournisseur: 'Platiniumshop',
      email: 'platiniumshop@gmail.com',
      ingredients: 'Plat',
      description: 'Un metal presque aussi précieux que l\'or',
      age: 5002,
      conservation: 'NA',
      prix: 22930
    },
    {
      nom: 'Cuivre',
      fournisseur: 'Coppershop',
      email: 'coppershop@gmail.com',
      ingredients: 'Cu',
      description: 'Un metal qui conduit bien le courant et la chaleur',
      age: 5003,
      conservation: 'sec',
      prix: 44
    },
    {
      nom: 'Fer',
      fournisseur: 'Ironshop',
      email: 'ironshop@gmail.com',
      ingredients: 'Fe',
      description: 'Le metal le plus utilisé',
      age: 5004,
      conservation: 'sec',
      prix: 0.65
    }
  ];

  constructor() {
  }

  list() {
    return this.produits;
  }

  add(produitAdd) {
    this.produits.push(produitAdd);
    console.log(this.produits);
  }
}
