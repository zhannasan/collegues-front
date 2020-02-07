import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { collegueMock } from '../mock/collegues.mock';
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input()
  collegue = collegueMock;
  modifyState = false;
  isHidden = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.subjectCollegue.subscribe(
      col => {
        this.collegue = col;
        console.log('collegue reçu', col);
      }
    );
  }

  creer() {
    console.log('Création d’un nouveau collègue.');
  }
  modifier() {
    console.log('Modification du collègue.');
    this.modifyState = true;
    this.isHidden = true;
  }
  changeEmail(emailIn: string, inputPhoto: HTMLInputElement) {
    this.collegue.email = emailIn;
    inputPhoto.focus();
  }
  changeUrl(urlIn: string) {
    this.collegue.email = urlIn;
  }
  valider() {
    this.modifyState = false;
    this.isHidden = false;
  }
  onMouse() {
  }
  afficherCollegue() {
  }
}
