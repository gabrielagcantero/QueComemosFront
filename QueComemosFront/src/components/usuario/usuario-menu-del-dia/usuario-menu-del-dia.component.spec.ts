import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioMenuDelDiaComponent } from './usuario-menu-del-dia.component';

describe('UsuarioMenuDelDiaComponent', () => {
  let component: UsuarioMenuDelDiaComponent;
  let fixture: ComponentFixture<UsuarioMenuDelDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioMenuDelDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioMenuDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
