import { Injectable } from '@angular/core';
import { AppUtils } from '../utils/app.utils';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AppConstantes } from '../utils/app.constantes';
import { Foto } from '../models/foto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http:HttpClient) { }

  salvar(fto:Foto){
    const foto = AppUtils.jsonString(fto);
    return this.http.post(`${AppConstantes.API}/fotos`,foto, AppUtils.header()).map(res => res);
  }

  excluir(id:number){   
    return this.http.delete(`${AppConstantes.API}/fotos/${id}`,AppUtils.header()).map(res => res);
  }

  listar(){  
    return this.http.get<Foto[]>(`${AppConstantes.API}/fotos`,AppUtils.header()).map(res => res);
  }

  upload(img:FormData){     
    return this.http.post<any>(`${AppConstantes.API}/fotos/imagem`,img,AppUtils.header2()).map(res => res);
  }

}
