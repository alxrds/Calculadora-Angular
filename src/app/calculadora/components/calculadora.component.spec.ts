import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services'

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CalculadoraComponent
      ],
      providers: [
        CalculadoraService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ...', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })
  );

  it('deve garantir que 1 X 4 = 4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(4);
    })
  );

  it('deve garantir que 1 / 4 = 0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.25);
    })
  );

});
