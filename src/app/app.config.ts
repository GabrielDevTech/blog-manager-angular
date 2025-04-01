import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { importProvidersFrom } from '@angular/core'

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuração de detecção de mudanças
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Configuração de rotas
    provideRouter(routes),

    // Suporte para hidratação do cliente (SSR ou SPA)
    provideClientHydration(withEventReplay()),

    // Configuração do AuthModule com Auth0
    importProvidersFrom(
      AuthModule.forRoot({
        domain: 'YOUR_AUTH0_DOMAIN',
        clientId: 'YOUR_CLIENT_ID',
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      })
    ),
  ],
};
