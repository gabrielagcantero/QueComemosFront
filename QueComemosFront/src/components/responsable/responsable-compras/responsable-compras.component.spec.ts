import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableComprasComponent } from './responsable-compras.component';

describe('ResponsableComprasComponent', () => {
  let component: ResponsableComprasComponent;
  let fixture: ComponentFixture<ResponsableComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsableComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
