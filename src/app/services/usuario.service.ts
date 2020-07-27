import { Injectable } from '@angular/core';
import { AppUtils } from '../utils/app.utils';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AppConstantes } from '../utils/app.constantes';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }


  salvar(user:Usuario){
    const usuario = AppUtils.jsonString(user);
    return this.http.post(`${AppConstantes.API}/usuarios`,usuario, AppUtils.headerUser()).map(res => res);
  }


  login(login:string,senha:string){
    const usuario = AppUtils.jsonString({login:login,senha:senha});
    return this.http.post<any>(`${AppConstantes.API}/login`,usuario,AppUtils.headerUser()).map(res =>{
      console.log(res.token);
      localStorage.setItem(AppConstantes.TOKEN, res.token);
    });
  }
}
