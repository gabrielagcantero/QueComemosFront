import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableSugerenciasComponent } from './responsable-sugerencias.component';

describe('ResponsableSugerenciasComponent', () => {
  let component: ResponsableSugerenciasComponent;
  let fixture: ComponentFixture<ResponsableSugerenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsableSugerenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
