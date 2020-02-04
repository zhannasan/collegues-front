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
  creer(){
    console.log('Création d’un nouveau collègue.')
  }
  modifier(){
    console.log('Modification du collègue.')
  }
}
