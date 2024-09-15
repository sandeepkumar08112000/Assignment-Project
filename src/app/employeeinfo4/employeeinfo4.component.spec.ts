import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeinfo4Component } from './employeeinfo4.component';

describe('Employeeinfo4Component', () => {
  let component: Employeeinfo4Component;
  let fixture: ComponentFixture<Employeeinfo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Employeeinfo4Component]
    });
    fixture = TestBed.createComponent(Employeeinfo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
