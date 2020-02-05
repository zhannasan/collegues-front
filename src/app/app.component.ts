import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'collegues-front';
  collegueM = collegueMock;
  modifyState = 0;
  isHidden = false;
  inputEmail: string;
  inputPhotoUrl: string;
  creer() {
    console.log('Création d’un nouveau collègue.');
  }
  modifier() {
    console.log('Modification du collègue.');
    this.modifyState = 1;
    this.isHidden = true;
  }
  valider() {
    //this.collegueM.email=this.inputEmail;
    //this.collegueM.photoUrl = inputUrl;
    this.modifyState = 0;
    this.isHidden = false;
    console.log(this.inputEmail);
  }

  changeEmail() {
    console.log(this.inputEmail);
    return this.inputEmail;
  }
  changeUrl() {
    console.log(this.inputPhotoUrl);
    return this.inputPhotoUrl;
  }
}
