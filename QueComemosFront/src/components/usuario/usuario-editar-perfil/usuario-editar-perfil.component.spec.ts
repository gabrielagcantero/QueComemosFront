import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditarPerfilComponent } from './usuario-editar-perfil.component';

describe('UsuarioEditarPerfilComponent', () => {
  let component: UsuarioEditarPerfilComponent;
  let fixture: ComponentFixture<UsuarioEditarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioEditarPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
