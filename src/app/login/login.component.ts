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
  login = '';
  senha = '';
  password='';
  usuario='';



  constructor(private service:UsuarioService, private router:Router) { }

  ngOnInit():void {
  }

  logar(login:string, senha:string) {
    
    return new Promise(resolve => {
     
      this.service.login(login,senha)
      .subscribe(data => { 
        console.log('PASSOU AQUI');             
           this.router.navigate(['/postagens']);         
        },(error:Error)=>{
          console.log(error);
        alert('Dados Incorretos!!');
      });
   
    });
  }

  cadastrar() {
    if(this.nome !== '' && this.usuario !== '' && this.password !== '') {
    return new Promise(resolve => {
      const dados:Usuario = {               
        nome: this.nome,
        login: this.usuario,
        senha: this.password
      };
      this.service.salvar(dados)
      .subscribe(data => {        
          window.location.reload(); 
      },(error:Error)=>{
        console.log(error);
        alert('Erro ao Salvar!!');
      });
    });
  } else{
    alert('Preencha os campos!');
  }
}

}
