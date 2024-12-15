import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComidasComponent } from './admin-comidas.component';

describe('AdminComidasComponent', () => {
  let component: AdminComidasComponent;
  let fixture: ComponentFixture<AdminComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
