import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoComponent } from './foto/foto.component';
import { LoginComponent } from './login/login.component';
import { PostagemComponent } from './postagem/postagem.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'fotos', component: FotoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'postagens', component: PostagemComponent},
  {path: 'menus', component: MenuComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
