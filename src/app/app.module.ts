import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostagemComponent } from './postagem/postagem.component';
import { FotoComponent } from './foto/foto.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FotoService } from './services/foto.service';
import { UsuarioService } from './services/usuario.service';
import { PostagemService } from './services/postagem.service';
import { ComentarioService } from './services/comentario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostagemComponent, 
    FotoComponent, MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FotoService,
    UsuarioService,
    PostagemService,
    ComentarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
