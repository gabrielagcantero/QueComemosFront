import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsablePagosComponent } from './responsable-pagos.component';

describe('ResponsablePagosComponent', () => {
  let component: ResponsablePagosComponent;
  let fixture: ComponentFixture<ResponsablePagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsablePagosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsablePagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
