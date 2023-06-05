import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { AccesibilidadComponent } from './views/accesibilidad/accesibilidad.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { InstalacionesComponent } from './views/instalaciones/instalaciones.component';
import { CursosComponent } from './views/cursos/cursos.component';
import { QuienesSomosComponent } from './views/quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'accesibilidad', component: AccesibilidadComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'instalaciones', component: InstalacionesComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'about', component: QuienesSomosComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
