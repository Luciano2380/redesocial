import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nome = '';
  usuario = '';
  senha = '';

  constructor(private service:UsuarioService, private router:Router) { }

  ngOnInit():void {
  }

  login(login:string, senha:string) {
    
    return new Promise(resolve => {
     
      this.service.login(login,senha)
      .subscribe(data => {

        if(data['success']){
          
            this.router.navigate(['/menus']);
        }else{
          alert('Dados Incorretos!!');
        }

      });
    });
  }

  cadastrar() {
    if(this.nome !== '' && this.usuario !== '' && this.senha !== '') {
    return new Promise(resolve => {
      const dados:Usuario = {               
        nome: this.nome,
        login: this.usuario,
        senha: this.senha
      };
      this.service.salvar(dados)
      .subscribe(data => {
        if(data){
          alert('Salvo com sucesso!!');
          window.location.reload();         
        }else{
          alert('Erro ao Salvar!!');
        }

      },(error:Error)=>{
        alert('Prencha os Campos!');
      });
    });
  }
}

}
