import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../services/postagem.service';
import { FotoService } from '../services/foto.service';
import { Postagem } from '../models/postagem';
import { Foto } from '../models/foto';
import { Comentario } from '../models/comentario';
import { ComentarioService } from '../services/comentario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {
  lista: Postagem[] = [];

  textoPostagem: string = '';
  textoComentario: string = '';
  url: string = '';
  obj:Postagem;

  constructor(private postagemService: PostagemService, private fotoService: FotoService, private comentarioService: ComentarioService,private router:Router) {
   this.listar();
   }

  ngOnInit() {
    this.listar();
  }

  listar() {
    return new Promise(resolve => {

      this.postagemService.listar().subscribe(data => {
        this.lista = data;
        resolve(true);
      });

    });
  }

  cadastrarPostagem() {
    if (this.textoPostagem !== '' && this.url !== '') {
      return new Promise(resolve => {       
        const post: Postagem = {
          textoPostagem: this.textoPostagem,
          linkFoto: this.url
        };
        this.postagemService.salvar(post)
          .subscribe(data => {
            this.obj=data;
            window.location.reload();
          }, (error: Error) => {
            alert('Erro ao Salvar!!');
          });
      });
    } else {
      alert('Preencha os campos!');
    }
  }
  cadastrarComentario(post:Postagem) {

    if (this.textoComentario !== '') {
      return new Promise(resolve => {

        const cmt: Comentario = {
          textoComentario: this.textoComentario,
          postagem:post
        };
        this.comentarioService.salvar(cmt)
          .subscribe(data => {
            window.location.reload();
          }, (error: Error) => {
            alert('Erro ao Salvar!!');
          });
      });
    } else {
      alert('Preencha os campos!');
    }
  }


  upload(event) {
    if (event.target.files) {
      return new Promise(resolve => {
        const form = new FormData();
        form.append('imagem', event.target.files[0]);
        this.fotoService.upload(form)
          .subscribe(data => {
            this.url = data.url;
          }, (error: Error) => {
            console.log(error);
            alert('Erro do upload');
          });
      });
    }
  }

  excluirPostagem(id) {
    return new Promise(resolve => {
      this.postagemService.excluir(id)
        .subscribe(data => {
          alert('Excluir!!');
          window.location.reload();
        }, (error: Error) => {
          alert('Erro excluir');
        });
    });
  }

  excluirComentario(id) {
    return new Promise(resolve => {
      this.comentarioService.excluir(id)
        .subscribe(data => {
          window.location.reload();
          alert('Excluir!!');
        }, (error: Error) => {
          alert('Erro excluir');
        });
    });
  }

  verAlbum(){
    this.router.navigate(['/fotos']); 
  }




}
