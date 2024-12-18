import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableNavbarComponent } from './responsable-navbar.component';

describe('ResponsableNavbarComponent', () => {
  let component: ResponsableNavbarComponent;
  let fixture: ComponentFixture<ResponsableNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsableNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
