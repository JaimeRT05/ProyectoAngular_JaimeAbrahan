import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasJaimeComponent } from './directivas-jaime.component';

describe('DirectivasJaimeComponent', () => {
  let component: DirectivasJaimeComponent;
  let fixture: ComponentFixture<DirectivasJaimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivasJaimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasJaimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
