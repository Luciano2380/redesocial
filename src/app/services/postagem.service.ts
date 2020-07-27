import { Injectable } from '@angular/core';
import { Postagem } from '../models/postagem';
import { AppUtils } from '../utils/app.utils';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AppConstantes } from '../utils/app.constantes';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { }

  salvar(post:Postagem){
    const postagem = AppUtils.jsonString(post);
    return this.http.post<Postagem>(`${AppConstantes.API}/postagens`,postagem, AppUtils.header()).map(res => res);
  }

  excluir(id:number){   
    return this.http.delete(`${AppConstantes.API}/postagens/${id}`,AppUtils.header()).map(res => res);
  }

  listar(){  
    return this.http.get<Postagem[]>(`${AppConstantes.API}/postagens`,AppUtils.header()).map(res => res);
  }
}
