import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UsuariosModule } from '../modulos/usuarios/usuarios.module';



@NgModule({
  declarations: [
    IndexComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    UsuariosModule
  ]
})
export class PagesModule { }
