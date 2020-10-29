import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PantallamedicoComponent } from './components/pantallamedico/pantallamedico.component';
import { PantallausuarioComponent } from './components/pantallausuario/pantallausuario.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckLoginGuard } from "./guards/check-login.guard";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'principal', component: PrincipalComponent, canActivate: [CheckLoginGuard] },
  { path: 'usuario', component: PantallausuarioComponent },
  { path: 'medico', component: PantallamedicoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
