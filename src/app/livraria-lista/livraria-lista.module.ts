import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrariaListaPageRoutingModule } from './livraria-lista-routing.module';

import { LivrariaListaPage } from './livraria-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivrariaListaPageRoutingModule
  ],
  declarations: [LivrariaListaPage]
})
export class LivrariaListaPageModule {}
