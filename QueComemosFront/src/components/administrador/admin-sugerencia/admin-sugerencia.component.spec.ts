import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSugerenciaComponent } from './admin-sugerencia.component';

describe('AdminSugerenciaComponent', () => {
  let component: AdminSugerenciaComponent;
  let fixture: ComponentFixture<AdminSugerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSugerenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
