import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeinfo3Component } from './employeeinfo3.component';

describe('Employeeinfo3Component', () => {
  let component: Employeeinfo3Component;
  let fixture: ComponentFixture<Employeeinfo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Employeeinfo3Component]
    });
    fixture = TestBed.createComponent(Employeeinfo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
