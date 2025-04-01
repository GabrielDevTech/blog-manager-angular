import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importa o serviço de autenticação
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'blog-manager-angular';

  // Propriedade reativa que acompanha o estado de autenticação
  isAuthenticated$!: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isLoggedIn(); // Observa o estado de autenticação
  }

  login(): void {
    this.authService.login('admin', 'admin'); // Passa as credenciais simuladas
  }

  logout(): void {
    this.authService.logout(); // Faz logout
  }
}
