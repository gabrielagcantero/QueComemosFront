import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarComidaComponent } from './admin-editar-comida.component';

describe('AdminEditarComidaComponent', () => {
  let component: AdminEditarComidaComponent;
  let fixture: ComponentFixture<AdminEditarComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditarComidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditarComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
