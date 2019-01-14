import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {store} from '@angular/core/src/render3';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits = [];
  show = false;

  nameCtrl: FormControl;
  fournisseurCtrl: FormControl;
  ageCtrl: FormControl;
  descriptionCtrl: FormControl;
  productForm: FormGroup;

  /*nom: string;
  fournisseur: string;
  email: string;
  ingredients: string;
  description: string;
  age: number;
  conservation: string;
  prix: number;

  constructor(private storeservice: StoreService, nom, fournisseur, email, ingredients, description, age, conservation, prix) {
    this.nom = nom;
    this.fournisseur = fournisseur;
    this.email = email;
    this.ingredients = ingredients;
    this.description = description;
    this.age = age;
    this.conservation = conservation;
    this.prix = prix;
  }*/
  constructor(private storeservice: StoreService, fb: FormBuilder) {
    this.nameCtrl = fb.control('', Validators.required);
    this.fournisseurCtrl = fb.control('', Validators.required);
    this.ageCtrl = fb.control('', Validators.required);
    this.descriptionCtrl = fb.control('', Validators.required);
    this.productForm = fb.group({
      name: this.nameCtrl,
      fournisseur: this.fournisseurCtrl,
      age: this.ageCtrl,
      description: this.descriptionCtrl
    });
  }

  ngOnInit() {
    this.produits = this.storeservice.list();
  }

  delete(produitName) {
    let index;
    for (let i = 0; i < this.produits.length; i++) {
      if (produitName === this.produits[i].nom) {
        index = i;
      }
    }
    console.log(index);
    this.produits.splice(index, 1);
  }

  ajouter() {
    if (this.show === false) {
      this.show = true;
    }
  }

  register() {
    this.show = false;
    this.storeservice.add(this.productForm.value);
  }
}
