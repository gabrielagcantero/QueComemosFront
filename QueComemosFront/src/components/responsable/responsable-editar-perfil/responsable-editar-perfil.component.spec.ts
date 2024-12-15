import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableEditarPerfilComponent } from './responsable-editar-perfil.component';

describe('ResponsableEditarPerfilComponent', () => {
  let component: ResponsableEditarPerfilComponent;
  let fixture: ComponentFixture<ResponsableEditarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsableEditarPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
