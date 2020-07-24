import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../services/postagem.service';
import { FotoService } from '../services/foto.service';
import { Postagem } from '../models/postagem';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {
  lista: Postagem[] = [];

  texto:string='';
  url:string='';

  constructor(private postagemService: PostagemService, private fotoService:FotoService) { }

  ngOnInit() {
  }

  listar(){    
    return new Promise(resolve =>{     

      this.postagemService.listar().subscribe(data => {
        for (const dado of data['']){
          this.lista.push(dado);
        }
        resolve(true);
      });

    });
  }

  cadastrarPostagem() {
  
    return new Promise(resolve => {
    
      
    });
  }
  cadastrarComentario() {
  
    return new Promise(resolve => {
    
      
    });
  }


  upload(event) {
    if(event.target.files) {
    return new Promise(resolve => {
     const form = new FormData();
     form.append('imagem',event.target.files[0]);
      this.fotoService.upload(form)
      .subscribe(data=> {
       this.url=data.url;
      },(error:Error)=>{
        alert('Erro do upload');
      });
    });
  }
}

excluir(id) {
  return new Promise(resolve => {     
      this.postagemService.excluir(id)
      .subscribe(data => {
           alert('Excluir!!');       
      },(error:Error)=>{
        alert('Erro excluir');
      });
    });
    }


}
