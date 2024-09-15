import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeinfo2Component } from './employeeinfo2.component';

describe('Employeeinfo2Component', () => {
  let component: Employeeinfo2Component;
  let fixture: ComponentFixture<Employeeinfo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Employeeinfo2Component]
    });
    fixture = TestBed.createComponent(Employeeinfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
