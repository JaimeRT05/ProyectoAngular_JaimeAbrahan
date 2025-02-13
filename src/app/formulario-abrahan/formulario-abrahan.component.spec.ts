import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAbrahanComponent } from './formulario-abrahan.component';

describe('FormularioAbrahanComponent', () => {
  let component: FormularioAbrahanComponent;
  let fixture: ComponentFixture<FormularioAbrahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAbrahanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAbrahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
