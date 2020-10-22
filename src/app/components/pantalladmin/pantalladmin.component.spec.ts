import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalladminComponent } from './pantalladmin.component';

describe('PantalladminComponent', () => {
  let component: PantalladminComponent;
  let fixture: ComponentFixture<PantalladminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantalladminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantalladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
