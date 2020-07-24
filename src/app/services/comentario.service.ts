import { Injectable } from '@angular/core';
import { AppUtils } from '../utils/app.utils';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AppConstantes } from '../utils/app.constantes';
import { Comentario } from '../models/comentario';


@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http:HttpClient) { }

  salvar(coment:Comentario){
    const comentario = AppUtils.jsonString(coment);
    return this.http.post(`${AppConstantes.API}/comentarios`,comentario, AppUtils.header()).map(res => res);
  }

  excluir(id:number){   
    return this.http.delete(`${AppConstantes.API}/comentarios/${id}`,{responseType:'text'});
  }  
}
