import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated$ = new BehaviorSubject<boolean>(false); // Estado reativo da autenticação

  constructor(private auth: Auth0Service) { }

  // Método de login
  login(username: string, password: string): void {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated$.next(true); // Atualiza o estado para autenticado
    } else {
      this.isAuthenticated$.next(false); // Estado permanece como não autenticado
    }
  }

  // Método de logout
  logout(): void {
    this.isAuthenticated$.next(false); // Atualiza o estado para não autenticado
  }

  // Retorna o estado atual como um Observable
  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }
}
