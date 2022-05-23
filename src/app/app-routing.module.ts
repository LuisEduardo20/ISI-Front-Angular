import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { HomeComponent } from './home/home.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { UserAuthenticatedGuard } from './services/guards/user-authenticated.guard';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cadastrar-produto",
    component: PageRegisterComponent,
    canActivate: [UserAuthenticatedGuard]
  },
  {
    path: "shows",
    component: ShowComponent
  },
  {
    path: "cardapio",
    component: CarteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
