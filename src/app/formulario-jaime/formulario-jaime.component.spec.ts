import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJaimeComponent } from './formulario-jaime.component';

describe('FormularioJaimeComponent', () => {
  let component: FormularioJaimeComponent;
  let fixture: ComponentFixture<FormularioJaimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioJaimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioJaimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
