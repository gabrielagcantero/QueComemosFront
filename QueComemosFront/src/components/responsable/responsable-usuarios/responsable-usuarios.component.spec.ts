import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableUsuariosComponent } from './responsable-usuarios.component';

describe('ResponsableUsuariosComponent', () => {
  let component: ResponsableUsuariosComponent;
  let fixture: ComponentFixture<ResponsableUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsableUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
