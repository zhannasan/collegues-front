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
  collegues: Observable<Collegue[]>;
  showList = 0;
  ngOnInit() {
  }

  rechercher(nom: string) {
    console.log('nom', nom);
    this.matricules =  this.dataService.rechercherParNom(nom);
    console.log(this.matricules);
    console.log('nom', nom);
  }
}
