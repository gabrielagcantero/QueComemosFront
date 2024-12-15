import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableAgregarPagoComponent } from './responsable-agregar-pago.component';

describe('ResponsableAgregarPagoComponent', () => {
  let component: ResponsableAgregarPagoComponent;
  let fixture: ComponentFixture<ResponsableAgregarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsableAgregarPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableAgregarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
