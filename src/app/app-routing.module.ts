import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IndexComponent } from './pages/index/index.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path:'home', component: IndexComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
