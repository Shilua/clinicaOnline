import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallausuarioComponent } from './pantallausuario.component';

describe('PantallausuarioComponent', () => {
  let component: PantallausuarioComponent;
  let fixture: ComponentFixture<PantallausuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallausuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
