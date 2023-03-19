import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosEnProcesoComponent } from './libros-en-proceso.component';

describe('LibrosEnProcesoComponent', () => {
  let component: LibrosEnProcesoComponent;
  let fixture: ComponentFixture<LibrosEnProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosEnProcesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosEnProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
