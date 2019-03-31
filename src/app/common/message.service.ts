import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: Set<string> = new Set<string>();

  private addMessage(message: string) {
    this.messages.add(message);
  }

  private clearMessage() {
    this.messages.clear();
  }

 handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: voir où mettre ce message d'erreur (dans une page peut être)
      console.error(error); 

      // TODO: Transformation de l'erreur pour que les utilisateurs comprennent
      this.log(`${operation} failed: ${error.message}`);

      // Permettre à l'application de fonctionner en renvoyant un résultat vide
      return of(result as T);
    };
  }

  /** affichage des logs */
  log(message: string) {
    this.addMessage(`Offre service: ${message}`);
  }
}
