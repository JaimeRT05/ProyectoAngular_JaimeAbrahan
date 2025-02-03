import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuralesComponent } from './estructurales.component';

describe('EstructuralesComponent', () => {
  let component: EstructuralesComponent;
  let fixture: ComponentFixture<EstructuralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstructuralesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstructuralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
