import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;

  modifyState = false;
  collegue = collegueMock;
  isHidden = false;
  inputEmail: string;
  inputPhoto: string;
  constructor() { }

  ngOnInit() {
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
    this.inputEmail = emailIn;
    inputPhoto.focus();
  }
  changeUrl(urlIn: string) {
    this.inputPhoto = urlIn;
  }
  valider() {
    this.modifyState = false;
    this.isHidden = false;
  }
  onMouse() {
  }
}
