import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrutamientoJaimeComponent } from './enrutamiento-jaime.component';

describe('EnrutamientoJaimeComponent', () => {
  let component: EnrutamientoJaimeComponent;
  let fixture: ComponentFixture<EnrutamientoJaimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrutamientoJaimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrutamientoJaimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
