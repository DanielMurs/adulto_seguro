import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { AccesibilidadComponent } from './views/accesibilidad/accesibilidad.component';
import { QuienesSomosComponent } from './views/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { CursosComponent } from './views/cursos/cursos.component';
import { InstalacionesComponent } from './views/instalaciones/instalaciones.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AccesibilidadComponent,
    QuienesSomosComponent,
    ContactoComponent,
    CursosComponent,
    InstalacionesComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
