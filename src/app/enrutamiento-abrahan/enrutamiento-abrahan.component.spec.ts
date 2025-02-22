import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrutamientoAbrahanComponent } from './enrutamiento-abrahan.component';

describe('EnrutamientoAbrahanComponent', () => {
  let component: EnrutamientoAbrahanComponent;
  let fixture: ComponentFixture<EnrutamientoAbrahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrutamientoAbrahanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrutamientoAbrahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
