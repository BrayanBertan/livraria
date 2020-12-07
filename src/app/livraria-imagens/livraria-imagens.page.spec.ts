import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivrariaImagensPage } from './livraria-imagens.page';

describe('LivrariaImagensPage', () => {
  let component: LivrariaImagensPage;
  let fixture: ComponentFixture<LivrariaImagensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrariaImagensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivrariaImagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
