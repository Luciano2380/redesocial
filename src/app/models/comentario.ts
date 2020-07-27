import { Usuario } from './usuario';
import { Postagem } from './postagem';

export class Comentario{
    id?: number;
     usuario?:Usuario;
    textoComentario: string;
    postagem?:Postagem;
}