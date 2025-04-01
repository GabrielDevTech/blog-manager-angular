import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { MainComponent } from './screens/system/main/main.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, // Rota padrão
    { path: 'main', component: MainComponent } // Rota "sobre"
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
