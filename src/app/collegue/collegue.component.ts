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
  inputPhotoUrl: string;
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
  changeEmail(emailIn: string, photoIn: HTMLInputElement) {
    this.inputEmail = emailIn;
    photoIn.focus();
  }
  changeUrl(urlIn: string) {
    this.inputPhotoUrl = urlIn;
  }
  valider() {
    this.modifyState = false;
    this.isHidden = false;
  }
}
