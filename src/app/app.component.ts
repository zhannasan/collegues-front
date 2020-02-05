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
  emailNew: string;
  urlNew: string;
  creer(){
    console.log('Création d’un nouveau collègue.');
  }
  modifier(){
    console.log('Modification du collègue.');
    this.modifyState = 1;
    this.isHidden = true;
  }
  valider(inputUrl: string){
    this.collegueM.email = this.emailNew;
    this.collegueM.photoUrl = inputUrl;
    this.modifyState = 0;
    this.isHidden = false;
  }

  changeEmail(inputEmail: string){
    console.log();
    this.emailNew = inputEmail;
  }

}
