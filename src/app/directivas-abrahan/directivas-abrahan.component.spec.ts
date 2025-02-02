import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasAbrahanComponent } from './directivas-abrahan.component';

describe('DirectivasAbrahanComponent', () => {
  let component: DirectivasAbrahanComponent;
  let fixture: ComponentFixture<DirectivasAbrahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivasAbrahanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasAbrahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
