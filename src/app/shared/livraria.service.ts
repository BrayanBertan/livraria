import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivrariaService {
  listaLivros:Livro[];
  imagens:String[];
  constructor() {
    this.imagens = new Array;
    this.listaLivros = [
      {
          isbn: 1111111111,
          autor: 'aaaaaaaaaa',
          titulo: 'bbbbbbbbbbbbb',
          url: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAX_euUOtlqRpjdbqbBMcDAdawVWlIwLe6rQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAX_euUOtlqRpjdbqbBMcDAdawVWlIwLe6rQ&usqp=CAU']
      },
      {
        isbn: 22222222222,
        autor: 'aaaaaaaaaa',
        titulo: 'bbbbbbbbbbbbb',
        url: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAX_euUOtlqRpjdbqbBMcDAdawVWlIwLe6rQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAX_euUOtlqRpjdbqbBMcDAdawVWlIwLe6rQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAX_euUOtlqRpjdbqbBMcDAdawVWlIwLe6rQ&usqp=CAU']
      },
      {
        isbn: 33333333333333,
        autor: 'aaaaaaaaaa',
        titulo: 'bbbbbbbbbbbbb',
        url: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAX_euUOtlqRpjdbqbBMcDAdawVWlIwLe6rQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAX_euUOtlqRpjdbqbBMcDAdawVWlIwLe6rQ&usqp=CAU']
      }
    ];
   }


   getAll() {
    return this.listaLivros;
  }

  excluir(livro: Livro) {
    this.listaLivros = this.listaLivros.filter(l => l.isbn !== livro.isbn);
  }


  showImages(param:number) {
      this.imagens = new Array;
      this.listaLivros.filter(l => l.isbn == param).forEach((e) => {
        this.imagens = e.url;
    }); 

    return this.imagens;
  }
}
