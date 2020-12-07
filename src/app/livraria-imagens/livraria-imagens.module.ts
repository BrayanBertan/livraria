import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrariaImagensPageRoutingModule } from './livraria-imagens-routing.module';

import { LivrariaImagensPage } from './livraria-imagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivrariaImagensPageRoutingModule
  ],
  declarations: [LivrariaImagensPage]
})
export class LivrariaImagensPageModule {}
