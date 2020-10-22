import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallamedicoComponent } from './pantallamedico.component';

describe('PantallamedicoComponent', () => {
  let component: PantallamedicoComponent;
  let fixture: ComponentFixture<PantallamedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallamedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallamedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
