import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgregarMenuComponent } from './admin-agregar-menu.component';

describe('AdminAgregarMenuComponent', () => {
  let component: AdminAgregarMenuComponent;
  let fixture: ComponentFixture<AdminAgregarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAgregarMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAgregarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
