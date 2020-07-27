import { Usuario } from './usuario';
import { Comentario } from './comentario';
import { Foto } from './foto';

export class Postagem{
    id?: number ;
    usuario?:Usuario;
    textoPostagem: string;
    comentarios?: Comentario[];
    linkFoto:string;
}