import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivrariaListaPage } from './livraria-lista.page';

describe('LivrariaListaPage', () => {
  let component: LivrariaListaPage;
  let fixture: ComponentFixture<LivrariaListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrariaListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivrariaListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
