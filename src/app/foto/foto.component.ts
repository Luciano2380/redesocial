import { Component, OnInit } from '@angular/core';
import { FotoService } from '../services/foto.service';
import { Foto } from '../models/foto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  url: string = '';

  lista:Foto[]=[];

  constructor(private fotoService: FotoService,private router:Router) { }

  ngOnInit() {
    this.listar();
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

  listar() {
    return new Promise(resolve => {

      this.fotoService.listar().subscribe(data => {
        this.lista = data;
        resolve(true);
      });

    });
  }

  cadastrar() {
    
      return new Promise(resolve => {
        const fto: Foto = {
          linkFoto: this.url
        };
      
        this.fotoService.salvar(fto)
          .subscribe(data => {
            window.location.reload();
          }, (error: Error) => {
            alert('Erro ao Salvar!!');
          });
      });
    
  }

  excluir(id) {
    return new Promise(resolve => {
      this.fotoService.excluir(id)
        .subscribe(data => {
          window.location.reload(); 
          alert('Excluir!!');
        }, (error: Error) => {
          alert('Erro excluir');
        });
    });
  }

  postar(){
    this.router.navigate(['/postagens']); 
  }

}
