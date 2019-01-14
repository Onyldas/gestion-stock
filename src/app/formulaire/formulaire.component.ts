import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  nameCtrl: FormControl;
  fournisseurCtrl: FormControl;
  ageCtrl: FormControl;
  descriptionCtrl: FormControl;
  productForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.nameCtrl = fb.control('');
    this.fournisseurCtrl = fb.control('');
    this.ageCtrl = fb.control('');
    this.descriptionCtrl = fb.control('');
    this.productForm = fb.group({
      name: this.nameCtrl,
      fournisseur: this.fournisseurCtrl,
      age: this.ageCtrl,
      description: this.descriptionCtrl
    });
  }

  reset() {
    this.nameCtrl.setValue('');
    this.fournisseurCtrl.setValue('');
    this.ageCtrl.setValue('');
    this.descriptionCtrl.setValue('');
  }

  register() {

  }

  ngOnInit() {
  }

}
