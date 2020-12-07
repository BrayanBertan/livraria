import { Component, OnInit } from '@angular/core';
import { LivrariaService } from '../shared/livraria.service';
import { Livro } from '../shared/livro';

@Component({
  selector: 'app-livraria-lista',
  templateUrl: './livraria-lista.page.html',
  styleUrls: ['./livraria-lista.page.scss'],
})
export class LivrariaListaPage implements OnInit {

  livros: Livro[];

  constructor(
    private livrariaService: LivrariaService
  ) { }

 
  ngOnInit() {
    this.listar();
  }
  
  listar() {  
    this.livros = this.livrariaService.getAll();
  }

  

  excluir(livro:Livro) {
    this.livrariaService.excluir(livro);
    this.listar();
  }
}
