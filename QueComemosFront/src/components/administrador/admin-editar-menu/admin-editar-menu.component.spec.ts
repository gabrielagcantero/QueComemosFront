import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarMenuComponent } from './admin-editar-menu.component';

describe('AdminEditarMenuComponent', () => {
  let component: AdminEditarMenuComponent;
  let fixture: ComponentFixture<AdminEditarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditarMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
