import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgregarUsuarioComponent } from './admin-agregar-usuario.component';

describe('AdminAgregarUsuarioComponent', () => {
  let component: AdminAgregarUsuarioComponent;
  let fixture: ComponentFixture<AdminAgregarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAgregarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAgregarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
