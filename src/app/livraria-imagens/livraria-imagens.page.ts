import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivrariaService } from '../shared/livraria.service';

@Component({
  selector: 'app-livraria-imagens',
  templateUrl: './livraria-imagens.page.html',
  styleUrls: ['./livraria-imagens.page.scss'],
})
export class LivrariaImagensPage implements OnInit {
  imagens:String[];
  constructor(private dados:ActivatedRoute,private livrariaService: LivrariaService) {
    this.dados.params.subscribe(params => {
      let param = params['param'];
      this.showImages(param);
      });
   }

  ngOnInit() {
  }

  showImages(param:number) {
    this.imagens = this.livrariaService.showImages(param);
  }

}
