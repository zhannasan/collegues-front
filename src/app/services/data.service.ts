import { Injectable, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    const obs$: Observable<string[]> = this.httpClient.get<string[]>(`${environment.urlData}?nom=${nom}`);
    console.log(`${environment.urlData}?nom=${nom}`);
    return obs$;
  }

}
