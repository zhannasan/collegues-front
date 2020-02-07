import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { Form } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {
  newCollegue: Collegue;
  modifyState = true;
  isHidden = true;

  submitted = false;
  model: Collegue = {matricule: '', nom: '', prenoms: '', dateDeNaissance: new Date(), email: '', photoUrl: ''};
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }
  onSubmit() { this.submitted = true;  }

 creerCollegue(form) {
    //this.model = new Collegue('67', form.value.nom, form.value.prenoms, form.value.email, form.value.date, form.value.photoUrl);
    console.log(this.model);
    console.log(form.value);
   // this.dataService.ajouterCollegue(this.model).subscribe(() => {}, error=>{console.log(`Collegue n'a pas été créé`);})
  }
  creer(){
    this.isHidden = false;
  }

}
