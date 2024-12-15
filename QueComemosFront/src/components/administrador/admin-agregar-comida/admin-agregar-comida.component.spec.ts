import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgregarComidaComponent } from './admin-agregar-comida.component';

describe('AdminAgregarComidaComponent', () => {
  let component: AdminAgregarComidaComponent;
  let fixture: ComponentFixture<AdminAgregarComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAgregarComidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAgregarComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
