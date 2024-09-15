import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeinfo1Component } from './employeeinfo1.component';

describe('Employeeinfo1Component', () => {
  let component: Employeeinfo1Component;
  let fixture: ComponentFixture<Employeeinfo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Employeeinfo1Component]
    });
    fixture = TestBed.createComponent(Employeeinfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
