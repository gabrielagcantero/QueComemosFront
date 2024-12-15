import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSugerenciaComponent } from './usuario-sugerencia.component';

describe('UsuarioSugerenciaComponent', () => {
  let component: UsuarioSugerenciaComponent;
  let fixture: ComponentFixture<UsuarioSugerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioSugerenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
