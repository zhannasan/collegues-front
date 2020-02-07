import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  constructor(private dataService: DataService) { }
  matricules: Observable<string[]>;
  collegue: Observable<Collegue[]>;

  ngOnInit() {
  }

  rechercher(nom: string) {
    this.matricules =  this.dataService.rechercherParNom(nom);
  }

  afficherCollegue(matricule: string){
    this.dataService.recupererCollegueCourant(matricule).subscribe(
      () => {},
      error => console.log(error));
    }
}
