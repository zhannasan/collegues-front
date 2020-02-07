import { Injectable, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment.prod';
import { Observable, Subject } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
//import {NoopInterceptor } from '../http-interceptors/noop-interceptors';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  subjectCollegue = new Subject<Collegue>();
  constructor(private httpClient: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    const obs$: Observable<string[]> = this.httpClient.get<string[]>(`${environment.urlData}?nom=${nom}`);
    console.log(`${environment.urlData}?nom=${nom}`);
    return obs$;
  }

  recupererCollegueCourant(matricule: string): Observable<Collegue> {
    return this.httpClient.get<Collegue>(`${environment.urlData}/${matricule}`)
      .pipe(
        tap(collegue => {
          this.subjectCollegue.next(collegue);
        })
      );
  }

  ajouterCollegue(collegue: Collegue): Observable<Collegue> {
    return this.httpClient.post<Collegue>(`${environment.urlData}`, collegue);
     /* .pipe(
        catchError(this.handleError('addCollegue', collegue))
      );*/
  }
}
